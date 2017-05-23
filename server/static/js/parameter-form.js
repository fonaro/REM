// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// Graph Parameters From functions
"use strict";

// On document ready
$(document).ready(function () {
    try {
        $('#param-select').click(sendPlotRequestFromUserInput);

        $('#parameters-form').change(function () {
            if (isParametersFormValid()) {
                $('#param-select').removeClass('disabled');
                $('#save-preset').removeClass('disabled');
            } else {
                $('#param-select').addClass('disabled');
                $('#save-preset').addClass('disabled');
            }
        });

        //prevent page reload on form send
        $("form").on("submit", function (e) {
            e.preventDefault();
        });
    } catch (e) {
        updateError(e.message);
    }
});



// Gathers all the parameters from the parameters form and returns a json
function fetchFormParameters() {
    // Get the parameters (deep copy)
    var modelParamJson = $.extend(true, {}, state.selectedModelParameters);

    // For each parameter, fill the json with the actual value
    $.each(state.selectedModelParameters, function (key, value) {
        var selectedColumn = $('#input-' + key).val();

        switch (value.type) {
            case 'single':
                // If we allow user to select a value in the column, send the column + value
                if (value.filterByValue) {
                    var selectedValue = $('#input-' + key + "-val-select").val();
                    var dict = {};
                    dict[selectedColumn] = selectedValue;
                    modelParamJson[key] = dict;
                } else { // If not: send only the column name
                    modelParamJson[key] = selectedColumn;
                }
                break;
            case 'multiple':
                // Get all the selected values
                var allSelectedValues = [];
                $('#input-' + key + '-val-select :selected').each(function (i, selected) {
                    allSelectedValues[i] = $(selected).text();
                });
                var dict = {};
                dict[selectedColumn] = allSelectedValues;
                modelParamJson[key] = dict;
                break;
            case 'radio':
                modelParamJson[key] = selectedColumn;
                break;
            case 'checkbox':
                // Get all the checked values
                var allCheckedValues = [];
                $('#input-' + key + ' :selected').each(function (i, checked) {
                    allCheckedValues[i] = $(checked).text();
                });
                break;
            case 'range':
                //add handling
                break;
        }
    });

    return {
        graph_type: state.selectedModel,
        parameters: modelParamJson,
    }
}


// Collects all the graph parameters selected by the user.
// Generates a json and sends to the server.
function sendPlotRequestFromUserInput() {
    updateLoading("Sending selected parameters to the server. Awaiting response.");
    // Compile parameters and send
    var modelParamJson = fetchFormParameters();
    state.sendPlotRequest(modelParamJson);
}

// Generates the required graph parameters .
// Creates the required input fields based on the selected model
function generateModelParameters(data_file, model, cols, parameters) {
    $('#parameter-selection').empty();
    var newP = generateParagraph("Select graph parameters:");
    $('#parameter-selection').append(newP);

    //go over all the model parameters, generate an input field and fill in the input parameters
    $.each(parameters, function (key, value) {
        var label = generateLabel(key, 'col-xs-2 col-form-label', key);
        var input = generateInputField(key, "single", cols);

        var formDiv = wrapInDiv([label, input], 'form-group row');
        $('#parameter-selection').append(formDiv);
        //if we want to add an option to select a specific value
        if (value.filterByValue) {

            //when the column is selected, 
            //fetch the actual parameters from the server 
            //and allow the user to select a specific value
            $('#input-' + key).on('input', function () {
                //get the datalist id
                var key = this.id.replace('input-', '');
                //if option exists
                if (findInDatalist(key, this.value)) {
                    updateNotification('requesting values of column ' + this.value + ' from server');
                    asyncGetValues(data_file, this.value, function (sub_parameters) {
                        addSelectByValue(key, parameters, sub_parameters);
                    });
                }
            });

        }

    });
}


// When receiving the sepecific column actual parameters,
// creates a dropdown with said parameters allowing the user to select by value
function addSelectByValue(key, parameters, sub_parameters) {
    updateNotification('received values from server,generating sub-input field');
    var type = parameters[key].type;
    //create new input field and populate it
    var input = generateInputField(key + '-val-select', type, sub_parameters, false);
    //if element already exists- update it with new content
    if ($('#input-' + key + '-val-select').length) {
        $('#input-' + key + '-val-select').replaceWith(input);
    } else {
        //if not - append new element to parent
        $('#input-' + key).after(input);
    }
}


// ##################################################################
// # Helper functions
// ##################################################################


// Finds a given value in a datalist with the given id
function findInDatalist(id, value) {
    var options = $('#' + id + " option");
    var isFound = false;
    $.each(options, function (i, val) {
        if (val.innerHTML == value) {
            isFound = true;
            return false;
        }
    });
    return isFound;
}

// Returns true if form is filled, and false otherwise
function isParametersFormValid() {
    var isValid = true;
    //for each parameter,  fill the json with the actual value
    $.each(state.selectedModelParameters, function (key, value) {

        switch (value.type) {
            case 'single':
                if ($('#input-' + key).val() === '') {
                    isValid = false;
                    return false;
                };
                break;
            case 'multiple':
                if ($('#input-' + key + '-val-select :selected').length == 0) {
                    isValid = false;
                    return false;
                }
                break;
            case 'radio':
                if ($('#input-' + key).val() === '') {
                    isValid = false;
                    return false;
                };
                break;
            case 'checkbox':
                //get all the checked values
                var allCheckedValues = [];
                $('#input-' + key + ' :selected').each(function (i, checked) {
                    allCheckedValues[i] = $(checked).text();
                });
                break;
            case 'range':
                //add handling
                break;
        }
    });

    return isValid;
}