// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// Graph Preset functions
"use strict";

/// on document ready:
$(document).ready(function () {
    try {
        initPresetTreeView();
        
        // Fixes explorer height to fill whole screen
        maxHeight('#preset-explorer', "#explorer-control");
        $(window).resize(function() {
            maxHeight('#preset-explorer', "#explorer-control");
        });
        
        // Preset explorer click event
        $('#preset-jstree').bind("click.jstree", handleSelectTreePreset);
        $('#preset-jstree').bind("hover_node.jstree", function(e, data) {
            var presetName = data.node.id;
            var info = state.getPresetInfo(presetName);
            var info = JSON.stringify(state.getPresetInfo(presetName), undefined, 4);
            $("#preset-info").html(syntaxHighlight(info)).show();
        });
        
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
            var presetName = $('#new-preset-name').val();
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
    updatePresetView(presets);
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
    if (!json) {
        return "";
    }
    
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


// Find the selected preset
function handleSelectTreePreset() {
    var node = $('#preset-jstree').jstree('get_selected', true)[0];
    switch (node.type) {
        case 'a-create':
            $('.nav-pills a[href="#parameter-selection-view"]').tab('show');
            break;
        case 'b-new-preset':
        case 'c-preset':
            state.selectPreset(node.id);
            break;
    }
}


// Update the presets in the view
function updatePresetView(presets, new_presets) {
    var result = [];
    
    result.push({
        text: "Create New...",
        children: false,
        type: 'a-create',
    });
    
    if(new_presets != undefined) {
        for (var key in new_presets) {
            result.push({
                text: key,
                children: false,
                id: key,
                type: 'b-new-preset',
            });
        }
    }
    
    for (var key in presets) {
        result.push({
            text: key,
            children: false,
            id: key,
            type: 'c-preset',
            li_attr: {class: "preset-item"},
        });
    }
    
    $('#preset-jstree').jstree(true).settings.core.data = result;
    $('#preset-jstree').jstree(true).refresh();
    
    //switch to graph display tab
    $('.nav-pills a[href="#preset-explorer"]').tab('show');
}


// Initialize the Tree view
function initPresetTreeView() {
    $('#preset-jstree').jstree({
        'core': {
            'data': [],
            'themes': {
                "name": "default-dark",
                //"dots": true,
                "icons": true,
                'responsive': false,
                //'variant' : 'small',
                'stripes': true
            }
        },
        'sort': function (a, b) {
            // Order firt according to type, then according to name
            return this.get_type(a) === this.get_type(b) ?
                (this.get_text(a) > this.get_text(b) ? 1 : -1) :
                (this.get_type(a) >= this.get_type(b) ? 1 : -1);
        },
        'types': {
            'a-create': {
                icon: 'glyphicon glyphicon-plus-sign',
                state: {'opened': false},
                li_attr: {style: 'background: green'}
            },
            'b-new-preset': {
                icon: 'glyphicon glyphicon-stats',
                state: {'opened': false},
                li_attr: {style: 'background: darkred'}
            },
            'c-preset': {
                icon: 'glyphicon glyphicon-stats',
                state: {'opened': false}
            }
        },
        'unique': {
            'duplicate': function (name, counter) {
                return name + ' ' + counter;
            }
        },
        'plugins': ['state', 'dnd', 'sort', 'types', 'unique', 'wholerow']
    })
}