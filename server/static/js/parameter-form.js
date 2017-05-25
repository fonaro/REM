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
                if($("#new-preset-name").val().length < 4) {
                    $('#save-preset').addClass('disabled');
                } else {
                    $('#save-preset').removeClass('disabled');
                }
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

    //go over all the model parameters, generate an input field and fill in the input parameters
    $.each(parameters, function (key, parameter_data) {
        var label = generateLabel(key, 'col-xs-2 col-form-label', parameter_data.label || key);
        var input = generateInputField(key, parameter_data.type, cols, true, parameter_data.default);

        var formDiv = wrapInDiv([label, input], 'form-group row');
        $('#parameter-selection').append(formDiv);

        //if we want to add an option to select a specific value
        if (parameter_data.filterByValue) {
            // When the column is selected, fetch the actual parameters from the server
            // and allow the user to select a specific value
            getInputField(key).on('input', function () {
                // The field key is the datalist ID
                return handleFillFilterByValue(data_file, parameter_data, key, this.value);
            });
        }
    });
}


function handleFillFilterByValue(data_file, parameter_data, key, value) {
    if (!findInDatalist(key, value))
        return; // if option does not exists
    updateNotification('Requesting values of column ' + value + ' from server');
    return asyncGetValues(data_file, value, function (sub_parameters) {
        addFilterByValueInput(key, parameter_data, sub_parameters);
    });
}


// When receiving the sepecific column actual parameters,
// creates a dropdown with said parameters allowing the user to select by value
function addFilterByValueInput(key, parameter_data, sub_parameters) {
    updateNotification('Received values from server; generating sub-input field');
    // Remove old isntance
    getInputField(key + '-val-select').remove();

    // Create new input field and populate it
    var type = parameter_data.filterByValue.type;
    var input = generateInputField(key + '-val-select', type, sub_parameters, false);
    
    getInputField(key).after(input);
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


// ##################################################################
// # Fetching data
// ##################################################################


function fetchFormSingleParameter(key, param_data) {
    var item = getInputField(key);
    var selectedValue = undefined;

    switch (param_data.type) {
        case 'single':
        case 'multiple':
        case 'radio':
        case 'checkbox':
            selectedValue = item.val();
            break;
        case 'range':
            //add handling
            return undefined;
        default:
            return undefined;
    }

    if(param_data.filterByValue) {
        var valSelectItem = getInputField(key + "-val-select");
        var filterSelectedValue = valSelectItem.val();
        
        switch(param_data.filterByValue.type) {
            case 'single':
            case 'radio':
                filterSelectedValue = [filterSelectedValue];
                break;
        }
        return [selectedValue, filterSelectedValue];
    }

    return selectedValue;
}


function setFormSingleParameter(key, param_data, set_value) {
    var item = getInputField(key);
    
    var filterValue;
    if(param_data.filterByValue) {
        filterValue = set_value[1];
        set_value = set_value[0];
    }

    switch (param_data.type) {
        case 'single':
        case 'multiple':
        case 'radio':
        case 'checkbox':
            item.val(set_value);
            break;
        case 'range':
            //add handling
            return undefined;
        default:
            return undefined;
    }
    
    if(param_data.filterByValue) {
        $.when(handleFillFilterByValue(state.selectedDataFile, param_data, key, set_value)).then(function(){
            var valSelectItem = getInputField(key + "-val-select");
            valSelectItem.val(filterValue);
        });
    }
}


function setFormParameters(set_data, name) {
    $.each(state.selectedModelParameters, function (key, param_data) {
        setFormSingleParameter(key, param_data, set_data[key]);
    });
    
    if(name != undefined && name != '') {
        $("#new-preset-name").val(name);
    }
}


// Gathers all the parameters from the parameters form and returns a json
function fetchFormParameters() {
    var modelParam = {};

    // For each parameter, fill the json with the actual value
    $.each(state.selectedModelParameters, function (key, param_data) {
        modelParam[key] = fetchFormSingleParameter(key, param_data);
    });

    return {
        graph_type: state.selectedModel,
        parameters: modelParam,
    }
}

function isParameterValid(key, value) {
    var item = getInputField(key);
    var isValid = true;

    switch (value.type) {
        case 'single':
        case 'radio':
            isValid = item.val() != '';
            break;
        case 'multiple':
        case 'checkbox':
            isValid = item.val().length > 0;
            break;
        case 'range':
            isValid = false;
            break;
    }

    var isFilterValid = true;
    if(isValid && value.filterByValue && value.filterByValue.required) {
        var valSelectItem = getInputField(key + "-val-select");

        switch(value.filterByValue.type) {
            case 'single':
                isValid = valSelectItem.val() != '';
                break;
            case 'multiple':
                isValid = valSelectItem.val().length > 0;
                break;
        }

        if (!isFilterValid)
            valSelectItem.addClass("error");
    }

    if (!isValid)
        item.addClass("error");

    return isValid && isFilterValid;
}

// Returns true if form is filled, and false otherwise
function isParametersFormValid() {
    var isValid = true;
    //for each parameter,  fill the json with the actual value
    $.each(state.selectedModelParameters, function (key, param_data) {
        isValid = isParameterValid(key, param_data);
        // Don't break. Check all fields.
    });

    return isValid;
}