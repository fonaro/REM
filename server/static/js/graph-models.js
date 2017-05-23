// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// Graph Models/Types, Plugins 
"use strict";

// On document ready
$(document).ready(function () {
    try {
        // Listener to plugin reload button.
        // Reload the plugins and refresh the model list
        $('#reload-plugins').click(function () {
            $("#err-msg").hide();
            updateListPlugin(true);
        });
    } catch (e) {
        updateError(e.message);
    }
});


// Update the list plugin view (issue a server query)
function updateListPlugin(do_reload) {
    if (do_reload === undefined) {
        do_reload = false;
    }

    $('model-list').empty();
    $('#parameter-selection').empty();
    asyncListPlugin(do_reload, handleModulesList);
}

// Fills the model list with available models and images
function handleModulesList(modelsData) {
    updateNotification("Received models response from the server.");

    $('#model-list').empty();

    $.each(modelsData, function (modelName, modelImage) {
        //generate li element with image and model name
        var newImage = document.createElement("img");
        //if image exists- use image,  otherwise use default image
        newImage.setAttribute('src', modelImage);
        newImage.setAttribute('onerror', "this.onerror=null;this.src='img/defaultLogo.png';");
        var newP = generateParagraph(modelName);

        var newLi = document.createElement("li");
        newLi.append(newImage);
        newLi.append(newP);
        newLi.setAttribute('name', modelName);

        //append new li
        $('#model-list').append(newLi);
    });

    //handling model selection (li click event)
    $("#model-list li").on("click", function () {
        // Remove all other highlights
        $("#model-list li").removeClass('highlight');
        // Add highlight to selected
        $(this).addClass('highlight');
        // Generate the graph parameters
        state.selectGraphModel(this.textContent);
    });

    $('.nav-pills a[href="#graph-selection"]').tab('show');
    $('.nav-pills a[href="#create-new"]').tab('show');
    $('#model-select').removeClass('disabled');

    resetNotifications();
}