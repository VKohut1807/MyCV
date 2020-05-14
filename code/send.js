"use strict";
$("#send").on("click", function () {
    let name = $("#name").val().trim();
    let mail = $("#mail").val().trim();
    let msg = $("#msg").val().trim();
    if (name == "") {
        $("#result_form").text("Please leave your name!");
        return false;
    } else if (mail == "") {
        $("#result_form").text("Please leave your e-mail!");
        return false;
    } else if (msg == "" || msg.length > 360) {
        $("#result_form").text("Please leave a message!");
        return false;
    }
    $("#result_form").text(`Message has been sent!`).addClass("color-special");
    $.ajax({
        url: 'code/send.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'mail': mail, 'msg': msg},
        dataType: "html",
        beforeSend: function () {
            $("#send").prop("disabled", true);
        },
        success:
            function () {
                $("#send").prop("disabled", false)
            }
        // function(){
        // if(!data)
        //     alert("pomylky")
        // else
        //     $("#ajax_form").trigger("reset");
        // $("#send").prop("disabled", false);
        // }
    });
});