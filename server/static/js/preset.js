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
        
        // Preset explorer double click event
        $('#preset-jstree').bind("dblclick.jstree", handleSelectTreePreset);
        $('#preset-jstree').bind("click.jstree", handleEditTreePreset);
        $('#preset-jstree').bind("hover_node.jstree", function(e, data) {
            var presetName = data.node.id;
            var info = state.getPresetInfo(presetName);
            if(info === undefined) {
                return;
            }
            
            var info = JSON.stringify(state.getPresetInfo(presetName), undefined, 4);
            $("#preset-info").html(syntaxHighlight(info));

            var item_offset = $("a:contains('" + presetName + "')").offset();
            $("#preset-info").css({
                left: $(this).offset().left + $(this).width(),
                top: item_offset.top,
                position: 'fixed'
            });

            $("#preset-info").show();
        });
        
        $('#preset-jstree').bind("dehover_node.jstree", function(e, data) {
            $("#preset-info").hide();
        });
        
        // Save dialog functions
        $('#save-preset').click(function () {
            var presetName = $('#new-preset-name').val();
            //get all other preset parameters and send to server
            var presetParameters = fetchFormParameters();
            //send save command to the sever and then refresh the preset list
            savePreset(presetName, presetParameters)
        });

        $('#delete-preset').click(function () {
            var presetName = $("#new-preset-name").val();
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

// Handles user preset selection
function handleSelectPreset() {
    var presetName = selectedPresetName();
    state.selectPreset(presetName);
}

// Find the selected preset
function handleSelectTreePreset() {
    var node = $('#preset-jstree').jstree('get_selected', true)[0];
    if(node == undefined) {
        return;
    }
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

function handleEditTreePreset() {
    var node = $('#preset-jstree').jstree('get_selected', true)[0];
    if(node == undefined) {
        return;
    }
    switch (node.type) {
        case 'b-new-preset':
            break;
        case 'c-preset':
        case 'z-gray-preset':
            var preset_info = state.getPresetInfo(node.id);
            $.when(state.selectGraphModel(preset_info.graph_type)).then(function() {
                setFormParameters(preset_info.parameters, node.id);
                $('#parameters-form').trigger('change');
                $('.nav-pills a[href="#parameter-selection-view"]').tab('show');
            });
            return;
        case 'a-create':
        default:
            state.resetListPlugin();
            return;
    }
    
    $('.nav-pills a[href="#parameter-selection-view"]').tab('show');
}


// Update the presets in the view
function updatePresetView(presets, applicable, new_presets) {
    var main_nodes = [];
    var new_nodes = [];
    var other_nodes = [];
    
    if(new_presets != undefined) {
        for (var key in new_presets) {
            new_nodes.push({
                text: key,
                children: false,
                id: key,
                type: 'b-new-preset',
            });
        }
    }
    
    main_nodes.push({
        text: "Create New...",
        children: new_nodes,
        type: 'a-create',
    });
    
    for (var key in presets) {
        if (applicable.indexOf(key) != -1) {
            main_nodes.push({
                text: key,
                children: false,
                id: key,
                type: 'c-preset',
            });
        } else {
            other_nodes.push({
                text: key,
                children: false,
                id: key,
                type: 'z-gray-preset',
            });
        }
    }
    
    if(other_nodes.length > 0) {
        main_nodes.push({
            text: "Unapplicable Presets",
            children: other_nodes,
            type: 'z-all',
        });
    }
    
    $('#preset-jstree').jstree(true).settings.core.data = main_nodes;
    $('#preset-jstree').jstree(true).refresh();
    $('#reload-preset').removeClass('disabled');
    
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
            'default': {
              a_attr: {style: 'color: white'}  
            },
            'a-create': {
                icon: 'glyphicon glyphicon-plus-sign',
                state: {'opened': true},
                li_attr: {style: 'background: green'}
            },
            'b-new-preset': {
                icon: 'glyphicon glyphicon-stats',
                state: {'opened': false},
                li_attr: {style: 'background: darkred'},
                a_attr: {style: 'color: green'}
            },
            'c-preset': {
                icon: 'glyphicon glyphicon-stats',
                state: {'opened': false},
            },
            'z-all': {
                icon: 'glyphicon glyphicon-folder-close',
                state: {'opened': false},
                a_attr: {style: 'color: gray'}
            },
            'z-gray-preset': {
                icon: 'glyphicon glyphicon-stats',
                state: {'opened': false},
                a_attr: {style: 'color: gray'}
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


// ##################################################################################
// # Helper Functions
// ##################################################################################


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