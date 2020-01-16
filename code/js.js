function slowScroll(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}

$(document).on("scroll", function(){
    if($(window).scrollTop() === 0)
        $("header").removeClass("fixed");
    else {
        $("header").attr("class", "fixed");
    }
})

$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $(".about").toggle(function(){});
    });
});

// function buttonSend() {
//     var name = $('#name').val();
//     var email = $('#mail').val();
//     var text = $('#msg').val();
    
//     if(email.length > 5 && email.length > 5 && text.length > 5) {
//         $('#send').removeAttr('disabled');
//     } 
//     else {
//         $('#send').attr('disabled', 'disabled');
//     }
// }

function focusInput() { 
    document.getElementById("name").focus(); 
}

$("#send").on("click", function(){
    var name = $("#name").val().trim();
    var mail = $("#mail").val().trim();
    var msg = $("#msg").val().trim();

    if(name.length < 5){
        $("#result_form").text("Podaj swoje imie");
        return false;
    }else if(mail == ""){
        $("#result_form").text("Podaj swoje e-mail");
        return false;
    }else if(mail == "" || msg.length > 360){
        $("#result_form").text("Podaj swoje text");
        return false;
    }

    $("#result_form").text("OK");


    $.ajax({
        url: 'code/send.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'mail': mail, 'msg': msg},
        dataType: "html",
        beforeSend: function(){$("#send").prop("disabled", true)},
        success: function(data){
            if(!data)
                alert("pomylky")
            else
                $("#ajax_form").trigger("reset");
    
            $("#send").prop("disabled", false);
    
            
        
        }
        // },
        // error: function(response) {
        //     $('#result_form').html('Błąd. Brak wysłanych danych.');
        // }
    });
});