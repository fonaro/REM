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
    var selectedPreset = $('#preset-list').val();
    var reg = /^(.*)\:\s{6}/g;
    var result = reg.exec(selectedPreset);
    return result[1];
}


// Handles user preset selection
function handleSelectPreset() {
    var presetName = selectedPresetName();
    state.selectPreset(presetName);
}

// Update the preset list view
function updatePresetList(presets) {
    var result = [];

    // Will display the name, followed by spaces, and the preset values
    for (var key in presets) {
        result.push(key + ":\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + JSON.stringify(presets[key]) + "'");
    }

    fillListParameters($('#preset-list'), result);
}