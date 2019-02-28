// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// Graph display functionallity
"use strict";

// On document ready
$(document).ready(function () {
    try {
        // Fixes explorer height to fill whole screen
        maxHeight('#graph-display', "#tab-select", 20);
        $(window).resize(function() {
            maxHeight('#graph-display', "#tab-select", 20);
        });
    } catch (e) {
        updateError(e.message);
    }
});

// Display the graph received from the server
function displayGraph(data) {
    //hide error message (if present)
    updateNotification("Displaying graph");

    $("#graph-display").empty();

    var div = data.div;
    var js = data.js;
    
    if(Array.isArray(div)) {
        for(var i in div) {
            $("#graph-display").append(div[i]);
        }
    } else {
        $("#graph-display").append(div);
    }
    eval(js);
    
    //switch to graph display tab
    $('.nav-pills a[href="#graph-display"]').tab('show');

    resetNotifications();
}


// Fixes the height of the graph display tab
function fixGraphDisplayHeight() {
    var remaining_height = parseInt($(window).height() - 250);
    $('#graph-display').height(remaining_height);
}