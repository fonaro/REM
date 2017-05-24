// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// Graph Preset functions
"use strict";

/// on document ready:
$(document).ready(function () {
    try {
        // Listener to preset select button
        $('#preset-list').change(function () {
            $('#select-preset').removeClass('disabled');
            $('#delete-preset').removeClass('disabled');
        });

        // Listener to preset select button
        $('#select-preset').click(handleSelectPreset);
        $('#preset-list').dblclick(handleSelectPreset);
        $('#preset-list').click(handleShowPreset);

        // Save dialog functions
        $('#save-preset').click(function () {
            $('#save-as-wrapper').show();
        });

        $('#save-as-cancel').click(function () {
            $('#preset-name').val('');
            $('#save-as-wrapper').hide();
        });

        $('#save-as-ok').click(function () {
            var presetName = $('#preset-name').val();
            //clear input and hide save as dialog
            $('#preset-name').val('');
            $('#save-as-wrapper').hide();

            //get all other preset parameters and send to server
            var presetParameters = fetchFormParameters();
            //send save command to the sever and then refresh the preset list
            savePreset(presetName, presetParameters)
        });

        $('#delete-preset').click(function () {
            var presetName = selectedPresetName();
            deletePresets([presetName])
        });

        $('#reload-preset').click(state.updatePresets);
        
        $('.nav-pills a[href="#preset-selection"]').tab('show');
    } catch (e) {
        updateError(e.message);
    }
});


function deletePresets(presets) {
    $.when(
        asyncDeletePreset(presets, displayOkMessage, serverErrorHandler)
    ).then(state.updatePresets);
}

function savePreset(name, parameters) {
    $.when(
        asyncSavePreset(name, parameters, displayOkMessage, serverErrorHandler)
    ).then(state.updatePresets);
}


// Return the selected preset name
function selectedPresetName() {
    return $('#preset-list').val();
}


// Handles user preset selection
function handleSelectPreset() {
    var presetName = selectedPresetName();
    state.selectPreset(presetName);
}


function handleShowPreset() {
    var presetName = selectedPresetName();
    var info = state.getPresetInfo(presetName);
    var info = JSON.stringify(state.getPresetInfo(presetName), undefined, 4);
    $("#preset-info").html(syntaxHighlight(info)).show();
}

// Update the preset list view
function updatePresetList(presets) {
    var result = [];

    // Will display the name, followed by spaces, and the preset values
    for (var key in presets) {
        result.push(key);
    }

    fillListParameters($('#preset-list'), result);
    $("#preset-info").empty();//.hide();
}

// Syntac highligting for json
// https://stackoverflow.com/a/7220510/2570677
function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}