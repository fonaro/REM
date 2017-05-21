// @author: Liran Funaro <funaro@cs.technion.ac.il>
// The global state of the page
"use strict";

var state = new function () {
// ##########################################################################
// # Parameters
// ##########################################################################

    // Current directory
    this.curDir = ""; // URL
    this.curDirList = []; // List

    // Selected file
    this.selectedDataFile = ""; // The selected data file URL

    // Model
    this.selectedModel = ""; // The selected graph model
    this.selectedModelParameters = null; // The model's parameters (from the server)
    this.selectedFileCols = null; // The data coloumns (from teh server)

    // Preset
    this.presets = {}; // The loaded presets (from the server)

    var self = this;

// ##########################################################################
// # Functions
// ##########################################################################

    // Updates the tree with new data
    this.changeDir = function (path_list) {
        asyncListDir(path_list, function (data) {
            self.curDirList = data.url_list;
            self.curDir = data.url;
            updateDir(self.curDir, data.json);
        }, serverErrorHandler);
    };

    // Go to an upper directory
    this.upDir = function () {
        var up_dir_list = self.curDirList.slice(0, -1);
        self.changeDir(up_dir_list);
    };

    // Select a data file path
    this.selectDataFile = function (data_file_path) {
        self.selectedDataFile = data_file_path;
        updateSelectedFile(self.selectedDataFile);
        // Get the plugin list and preset list from the server
        updateLoading("sending experiment to the server, awaiting response");
        updateListPlugin();
        self.updatePresets();
    };


    // Select a graph model (name)
    this.selectGraphModel = function (model) {
        self.selectedModel = model;

        $.when(
            asyncGetColumns(self.selectedDataFile, function (cols) {
                self.selectedFileCols = cols;
            }, serverErrorHandler),
            asyncPluginParameters(self.selectedModel, function (parameters) {
                self.selectedModelParameters = parameters;
            }, serverErrorHandler)
        ).then(function () {
            generateModelParameters(
                self.selectedDataFile,
                self.selectedModel,
                self.selectedFileCols,
                self.selectedModelParameters);
        });
    };

    // Select a preset
    this.selectPreset = function (presetName) {
        if (presetName != null && presetName != undefined) {
            return self.sendPlotRequest(self.presets[presetName]);
        } else {
            updateError("Couldn't read preset name out of selected preset");
        }
    };


    // Sends the selected parameters to the server to plot
    this.sendPlotRequest = function (data) {
        updateLoading("Plotting data file");
        return asyncPlot(self.selectedDataFile, data.graph_type, data.parameters,
            displayGraph, serverErrorHandler);
    };


    // Requests the preset list from the server - used to fill the 'load' section
    this.updatePresets = function () {
        return asyncLoadPresets(self.selectedDataFile, function (data) {
            self.presets = data;
            updatePresetList(self.presets);
        }, serverErrorHandler);
    };
};