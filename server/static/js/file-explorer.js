// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// File-explorer creation and update functions
"use strict";

// On document ready
$(document).ready(function () {
    try {
        // Hide unnecesary information
        $('#selected-exp').hide();

        // Draw the initial file explorer tree
        initTreeView();

        // Fixes explorer height to fill whole screen
        maxHeight('#file-explorer');
        maxHeight('#row');
        $(window).resize(function() {
            maxHeight('#file-explorer');
            maxHeight('#row');
        })

        $("#explorer-wrapper").resizable({
            handles: 'n,w,s,e',
            minWidth: 200,
            containment: ".row"
        });

        // Reloads the page when clicking on the logo
        $('#logo').on('click', function() {
            location.reload();
        });

        // File explorer double-click event
        $('#jstree').bind("dblclick.jstree", handleSelectTreeFile);
        // 'OK' button
        $('#proj-select').on('click', handleSelectTreeFile);
        // 'UP directory' button
        $('#up-dir').on('click', state.upDir);

        // Toggles file explorer button
        $("#toggle-explorer").click(function () {
            $("#explorer-wrapper").toggle("slide");
            $("#toggle-explorer i").toggleClass("glyphicon-arrow-left glyphicon-arrow-right");
            $("#right-panel").toggleClass("col-md-9 col-md-12");
            $(window).trigger('resize');
        });

        // After everything is done, query the directory
        state.updateDir();
        state.updateDataFile();
    } catch (e) {
        updateError(e.message);
    }
});


// Find the selected file and update it
function handleSelectTreeFile() {
    var node = $('#jstree').jstree('get_selected', true)[0];
    switch (node.type) {
        case 'default':
            state.changeDir([node.id]);
            break;
        case 'file':
            state.selectDataFile(node.id);
            break;
    }
}

// Update the selected file view
function updateSelectedFileView(data_file_path) {
    $('#selected-exp').html(data_file_path);
    $('#selected-exp').show();
}


// Update the directory in the view
function updateDirView(curDir, data_json) {
    $('#jstree').jstree(true).settings.core.data = data_json;
    $('#jstree').jstree(true).refresh();
    $('#curr-dir').html(curDir);
}


// Initialize the Tree view
function initTreeView() {
    $('#jstree').jstree({
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
                'icon': 'glyphicon glyphicon-folder'
            },
            'file': {
                'valid_children': [],
                'icon': 'glyphicon glyphicon-file'
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


// Fixes the height of elements in the middle view
function maxHeight(div) {
    var remaining_height = $(window).height() - $("#top-part").height() - $("#notification").height();
    $(div).height(remaining_height);
}