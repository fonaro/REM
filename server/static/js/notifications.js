// @edited: Liran Funaro <funaro@cs.technion.ac.il>
// @author: Hadas Shahar <hshaha05@campus.haifa.ac.il>
// Notifications functionallity
"use strict";

// On document ready
$(document).ready(function () {
    try {
        resetNotifications();
    } catch (e) {
        updateError(e.message);
    }
});


// Resets the notifications display
// Hides loaders and error messages
function resetNotifications() {
    $("#err-block").hide();
    $('#loader').hide();
    $('#save-as-wrapper').hide();
    $('#server-success').hide();
}

// Update loading message
function updateLoading(message) {
    $('#loader').show();
    updateNotification(message);
}

// Update the notification message
function updateNotification(message) {
    console.log(message);
    $("#notification").html(message);
}

// Display error message
function updateError(message, traceback) {
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

    $('#loader').hide();
    $("#err-block").show();
}

// Display success message
// Disappears after 5 sec
function updateSuccess(message) {
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