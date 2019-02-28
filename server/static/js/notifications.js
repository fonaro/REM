// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// Notifications functionallity
"use strict";

// On document ready
$(document).ready(function () {
    try {
        $('#loader').hide();
        resetNotifications();
    } catch (e) {
        updateError(e.message);
    }
});


// Resets the notifications display
// Hides loaders and error messages
function resetNotifications() {
    $("#err-block").hide();
    $("#right-panel").LoadingOverlay("hide");
//    $('#loader').hide();
    $('#save-as-wrapper').hide();
    $('#server-success').hide();
    $('#tab-content').show();
}

// Update loading message
function updateLoading(message) {
    resetNotifications();
//    $('#loader').show();
    $("#right-panel").LoadingOverlay("show", {color: "rgba(255,255,255,0.9)"});
    $('#tab-content').hide();
    updateNotification(message);
}

// update when loading is done
function updateFinishLoading(message) {
    resetNotifications();
    updateNotification(message);
}

// Update the notification message
function updateNotification(message) {
    console.log(message);
    $("#notification").html(message);
}

// Display error message
function updateError(message, traceback) {
    resetNotifications();
    console.log(message);
    $('#err-msg').html(message);

    if (traceback === undefined) {
        $('#err-traceback').html("");
        $('#err-traceback').hide();
        $('#err-msg').css('cursor', 'auto');
        $('#err-msg').click();
    } else {
        console.log(traceback);
        $('#err-traceback').html(traceback);
        $('#err-traceback').hide();
        $('#err-msg').css('cursor', 'pointer');
        $('#err-msg').click(function () {
            $('#err-traceback').toggle();
        });
    }

    $("#err-block").show();
}

// Display success message
// Disappears after 5 sec
function updateSuccess(message) {
    resetNotifications();
    console.log(message);
    $('#server-success').html(message);
    $('#server-success').show();
    $('#server-success').fadeOut(5000);
}

// Displays an error message from the server
function serverErrorHandler(message, traceback) {
    updateError(message, traceback);
}

// Displays the ok message received from the server
function displayOkMessage(message) {
    updateSuccess(message[0]);
}