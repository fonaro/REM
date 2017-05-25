// @author: Liran Funaro <funaro@cs.technion.ac.il>
// The global state of the page
"use strict";

var state = new function () {
// ##########################################################################
// # Parameters
// ##########################################################################
    
    // Current directory
    this.curDir = getHashCookie("curDir", ""); // Directory URL

    // Selected file
    this.selectedDataFile = getHashCookie("selectedDataFile", undefined); // The selected data file URL
    this.selectedFileCols = null; // The data coloumns (from teh server)

    // Model
    this.modelList = []; // The model list
    this.selectedModel = ""; // The selected graph model
    this.selectedModelParameters = null; // The model's parameters (from the server)

    // Preset
    this.presets = {}; // The loaded presets (from the server)

    var self = this;

// ##########################################################################
// # Functions
// ##########################################################################

    // Updates the tree with new data
    this.changeDir = function (path) {
        return asyncListDir(path, function (data) {
            self.curDir = data.url;
            
            setHashCookie("curDir", self.curDir);

            updateDirView(self.curDir, data.json);
        }, serverErrorHandler);
    };
    
    // Updates the tree with the current directory
    this.updateDir = function (update_cookie) {
        return self.changeDir(self.curDir);
    };

    // Select a data file path
    this.selectDataFile = function (data_file_path) {
        updateLoading("Fetching data file information. Awaiting response");

        return asyncGetColumns(data_file_path, function (cols) {
            updateFinishLoading("Received data file information.");
            self.selectedDataFile = data_file_path;
            self.selectedFileCols = cols;
            setHashCookie("selectedDataFile", self.selectedDataFile);

            updateSelectedFileView(self.selectedDataFile);

            // Get the plugin list and preset list from the server
            self.updateListPlugin();
            self.updatePresets();
        }, serverErrorHandler)
    };

    // Updates the view with the current selected file
    this.updateDataFile = function() {
        if(self.selectedDataFile == undefined || self.selectedDataFile == null || self.selectedDataFile == "")
            return;
        else
            return self.selectDataFile(self.selectedDataFile);
    };

    // Update the list plugin view (issue a server query)
    this.updateListPlugin = function(do_reload) {
        if (do_reload === undefined) {
            do_reload = false;
        }

        updateLoading("Fetching plugin information. Awaiting response");

        return asyncListPlugin(do_reload, function(modelList) {
            updateFinishLoading("Received models.");
            self.modelList = modelList;
            createModulesListView(self.modelList);
        }, serverErrorHandler);
    };
    
    // Select a graph model (name)
    this.selectGraphModel = function (model) {
        self.selectedModel = model;

        return asyncPluginParameters(self.selectedModel, function (parameters) {
            self.selectedModelParameters = parameters;
            generateModelParameters(
                self.selectedDataFile,
                self.selectedModel,
                self.selectedFileCols,
                self.selectedModelParameters);
        }, serverErrorHandler);
    };
    
    
    this.getPresetInfo = function (presetName) {
        return self.presets[presetName];
    };

    // Select a preset
    this.selectPreset = function (presetName) {
        if (presetName == null && presetName == undefined) {
            return;
        }
        if (self.presets[presetName] != undefined) {
            return self.sendPlotRequest(self.presets[presetName]);
        } else {
            updateError("No such preset " + presetName);
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