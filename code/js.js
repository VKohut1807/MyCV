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

function focusInput() { 
    document.getElementById("name").focus(); 
}

$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

$("#send").on("click", function(){
    var name = $("#name").val().trim();
    var mail = $("#mail").val().trim();
    var msg = $("#msg").val().trim();

    if(name == ""){
        $("#result_form").text("Podaj imię");
        return false;
    }else if(mail == ""){
        $("#result_form").text("Podaj e-mail");
        return false;
    }else if(msg == "" || msg.length > 360){
        $("#result_form").text("Wpisz krótką wiadomość (do 360znaków)");
        return false;
    }

    $("#result_form").text("Wiadomość została wysłana");

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
    });
});