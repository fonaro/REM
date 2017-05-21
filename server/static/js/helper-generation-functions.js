// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// Generation helper functions
"use strict";

// Generates an input
function generateInput(inputType) {
    var newInput = document.createElement('input');
    newInput.setAttribute("type", inputType);
}

// Generates a label
function generateLabel(forName, className, value) {
    var newLabel = document.createElement("label");
    newLabel.innerHTML = value;
    newLabel.setAttribute("for", forName);
    newLabel.setAttribute("class", className);

    return newLabel;
}

// Generates the required input element (datalist,select,radio button,checkbox or range)
function generateInputField(id, type, parameters, wrap) {
    if (wrap === undefined) {
        wrap = true;
    }

    var newInput;

    switch (type) {
        case 'single':
            newInput = generateDatalist(id);
            newInput[1] = fillListParameters(newInput[1], parameters);
            break;
        case 'multiple':
            newInput = generateSelect(id, true);
            newInput[0] = fillListParameters(newInput[0], parameters);
            break;
        case 'radio':
            //add handling
            break;
        case 'checkbox':
            //add handling
            break;
        case 'range':
            //add handling
            break;
    }
    //if wrap is true- wrap the input in a div (looks more unified)
    if (wrap) {
        newInput = wrapInDiv(newInput, 'col-xs-10');
    }
    return newInput;
}

// Generates radio button
function generateRadioButtons(name) {
    var newInput = generateInput('radio');
    newInput.setAttribute('name', name);
}


// Generates an array with a linked input and datalist elements in it
function generateDatalist(id) {
    var newInput = document.createElement('input');
    newInput.setAttribute('class', 'form-control');
    newInput.setAttribute('list', id);
    newInput.setAttribute('id', 'input-' + id);

    var newDatalist = document.createElement('datalist');
    newDatalist.setAttribute('id', id);

    return [newInput, newDatalist];
}


// Generates an array with a select element in it
function generateSelect(id, isMultiple) {

    var newSelect = document.createElement('select');
    newSelect.setAttribute('id', 'input-' + id);
    newSelect.setAttribute('class', 'form-control');
    newSelect.multiple = isMultiple;

    return [newSelect];
}

// Creates options from the given parameters and appends them to the given list element
function fillListParameters(element, parameters) {
    //empty the given list
    $(element).empty();
    //fill with given parameters
    $.each(parameters, function (i, value) {
        var newOption = document.createElement("option");
        newOption.innerHTML = value;
        element.append(newOption);
    });

    return element;
}

// Receives an array of elements.
// Wraps them in a div with 'className' and returns the div.
function wrapInDiv(elements, className) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute('class', className);

    $.each(elements, function (i, value) {
        newDiv.append(value);
    })

    return newDiv;
}

// Generates a button with the required id and class
function generateButton(id, className, text) {
    var newButton = document.createElement('button');
    newButton.setAttribute('id', id);
    newButton.setAttribute('class', className);
    newButton.innerHTML = text;

    return newButton;
}

// Generates a <p> element with the required text
function generateParagraph(text) {
    var newP = document.createElement('p');
    newP.innerHTML = text;
    return newP;
}