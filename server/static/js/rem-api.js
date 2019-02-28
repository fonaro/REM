// @author: Liran Funaro <funaro@cs.technion.ac.il>
// REM server API
"use strict";

// Optinal error handler for the server error response
function _errorHandler(onError) {
    if (onError === undefined) {
        return undefined;
    }

    return function (data) {
        data = data.responseJSON;
        onError(data.message, data.traceback);
    }
}

// #############################################################################
// # Directory Listing
// #############################################################################

function asyncListDir(path, onSuccess, onError) {
    return $.ajax({
        url: "/listdir",

        type: "POST",
        async: true,

        contentType: 'application/json',
        dataType: "json",

        data: JSON.stringify(path),

        success: onSuccess,
        error: _errorHandler(onError),
    });
}


// #############################################################################
// # Data Fetching and Plotting
// #############################################################################


function asyncGetColumns(path, onSuccess, onError) {
    return $.ajax({
        url: "/data/getcolumns",

        type: "POST",
        async: true,

        contentType: 'application/json',
        dataType: "json",

        data: JSON.stringify(path),

        success: onSuccess,
        error: _errorHandler(onError),
    });
}


function asyncGetValues(data_file, parameters, onSuccess, onError) {
    return $.ajax({
        url: "/data/getvals",

        type: "POST",
        aync: true,

        contentType: 'application/json',
        dataType: 'json',

        data: JSON.stringify({
            data_file: data_file,
            parameters: parameters,
        }),

        success: onSuccess,
        error: _errorHandler(onError),
    });
}


function asyncPlot(data_file, graph_type, parameters, onSuccess, onError) {
    return $.ajax({
        url: "/data/plot",

        type: "POST",

        contentType: 'application/json',
        dataType: 'json',

        data: JSON.stringify({
            data_file: data_file,
            graph_type: graph_type,
            parameters: parameters,
        }),

        success: onSuccess,
        error: _errorHandler(onError),
    });
}


// #############################################################################
// # Plugins
// #############################################################################


function asyncListPlugin(do_reload, onSuccess, onError) {
    return $.ajax({
        url: "/plugin/list",

        type: "POST",

        contentType: 'application/json',
        dataType: 'json',

        data: JSON.stringify(do_reload ? "reload" : ""),

        success: onSuccess,
        error: _errorHandler(onError),
    })
}


function asyncPluginParameters(plugin_name, onSuccess, onError) {
    return $.ajax({
        url: "/plugin/parameters",

        type: "POST",

        contentType: 'application/json',
        dataType: 'json',

        data: JSON.stringify(plugin_name),

        success: onSuccess,
        error: _errorHandler(onError),
    })
}


// #############################################################################
// # Preset Handling
// #############################################################################


function asyncLoadPresets(data_file, onSuccess, onError) {
    return $.ajax({
        url: "/preset/load",

        type: "POST",
        aync: true,

        contentType: 'application/json',
        dataType: 'json',

        data: JSON.stringify(data_file),

        success: onSuccess,
        error: _errorHandler(onError),
    });
}


function asyncSavePreset(name, preset, onSuccess, onError) {
    return $.ajax({
        url: "/preset/save",

        type: "POST",

        contentType: 'application/json',
        dataType: 'json',

        data: JSON.stringify({
            name: name,
            preset: preset
        }),

        success: onSuccess,
        error: _errorHandler(onError),
    })
}


function asyncDeletePreset(presets, onSuccess, onError) {
    return $.ajax({
        url: "/preset/delete",

        type: "POST",

        contentType: 'application/json',
        dataType: 'json',

        data: JSON.stringify(presets),

        success: onSuccess,
        error: _errorHandler(onError),
    })
}