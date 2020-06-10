"use strict";
$("#ajax_form").on("submit", function (event) {
    event.preventDefault();
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let msg = $("#msg").val().trim();
    if (name == "") {
        $("#result_form").text("Please leave your name!");
        return false;
    } else if (email == "") {
        $("#result_form").text("Please leave your e-mail!");
        return false;
    } else if (msg == "" || msg.length > 360) {
        $("#result_form").text("Please leave a message!");
        return false;
    }
    let all_date = new FormData(this);
    $.ajax({
        url: 'code/send.php',
        type: 'POST',
        contentType: false,
        processData: false,
        cache: false,
        data: all_date,
        success: function(messages){
            if(messages == 'success') {
                $("#result_form").text(`Message has been sent!`).addClass("color-special");
            } else {
                alert('Error, failed to send response message!')
            }
        $('#ajax_form')[0].reset();
        }
    });
});
