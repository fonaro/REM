// @author: Liran Funaro <funaro@cs.technion.ac.il>
// Handle cookie data, per hash value
"use strict";


// ##########################################################
// # Cookie handling
// ##########################################################

function readStorage(key, default_value) {
    try {
        return JSON.parse(localStorage[key]);
    } catch (e) {
        return default_value;
    }
}

function writeStorage(key, value) {
    localStorage[key] = JSON.stringify(value)
}


// ##########################################################
// # Hashdata handling
// ##########################################################
var HASH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var MAX_COOKIE_CACHE = 1024;
var HASH_LENGTH = setCollisionProbability(1E-40);


// Based on the approximation: P(collision) = (k^2)/(2N)
// k = MAX_COOKIE_CACHE
// N = len(HASH_CHARS)^HASH_LENGTH
// http://preshing.com/20110504/hash-collision-probabilities/
function calcCollisionProbability() {
    var k = MAX_COOKIE_CACHE;
    var N = Math.pow(HASH_CHARS.length, HASH_LENGTH);
    return (k*k)/(2*N);
}

// Calculate the reverse: N = (k^2)/(2*P(collision))
function setCollisionProbability(probability) {
    var k = MAX_COOKIE_CACHE;
    var N = (k*k)/(2*probability);
    HASH_LENGTH = Math.ceil(Math.log(N) / Math.log(HASH_CHARS.length));
    return HASH_LENGTH;
}

// Taken from: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeHashID() {
    var text = "";
    for (var i = 0; i < HASH_LENGTH; i++)
        text += HASH_CHARS.charAt(Math.floor(Math.random() * HASH_CHARS.length));
    return text;
}


function resetHashID() {
    var hash = makeHashID();
    window.location.hash = hash
    return window.location.hash;
}


function getHashID() {
    var hash = window.location.hash;
    if (hash == "")
        return resetHashID();
    return hash;
}


// Set a new data to the cookie while issueing a new hash
function setHashCookie(key, value) {
    // Fetch LRU and data
    var lru = readStorage("__hash_lru__", []);
    var data = readStorage("__hash_data__", {});
    
    // Get current ID and data
    var id = getHashID();
    var hashData = data[id] || {};

    if (JSON.stringify(hashData[key]) != JSON.stringify(value)) {
        id = resetHashID();
        hashData = $.extend(true, {}, hashData);
        hashData[key] = value;
        data[id] = hashData;
    }

    // Remove this ID from the LUR if exists
    var i;
    while((i = lru.indexOf(id)) != -1)
        lru.splice(i, 1);
    
    // Insert ID to the top of the LRU
    lru.push(id)
    
    // Clear up least-recently-used IDs from LRU array
    while (lru.length > MAX_COOKIE_CACHE) {
        lru.shift();
    }
    
    // Clean up least-recently-used IDs from data map
    var data_ids = Object.keys(data);
    for (var i in data_ids) {
        var old_id = data_ids[i];
        if (lru.indexOf(old_id) == -1)
            delete data[old_id];
    }
    
    writeStorage("__hash_lru__", lru);
    writeStorage("__hash_data__", data);
}


function getHashCookie(key, default_value) {
    var id = getHashID();
    return (readStorage("__hash_data__", {})[id] || {})[key] || default_value;
}