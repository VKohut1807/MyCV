function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}

function focusInput() {
    document.getElementById("name").focus();
}

$("#send").on("click", function () {
    var name = $("#name").val().trim();
    var mail = $("#mail").val().trim();
    var msg = $("#msg").val().trim();

    if (name == "") {
        $("#result_form").text("Podaj imię");
        return false;
    } else if (mail == "") {
        $("#result_form").text("Podaj e-mail");
        return false;
    } else if (msg == "" || msg.length > 360) {
        $("#result_form").text("Wpisz krótką wiadomość");
        return false;
    }

    $("#result_form").text(`Wiadomość wysłana`).addClass("color-special");

    $.ajax({
        url: 'code/send.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'mail': mail, 'msg': msg},
        dataType: "html",
        beforeSend: function () {
            $("#send").prop("disabled", true)
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

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-button');
    let links = menu.find('.burger-link');
    let podLinks = menu.find('.burger-podLink');
    let notScroll = menu.find('.menu-burger-notScroll');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    links.on('click', () => toggleMenu());
    podLinks.on('click', () => toggleMenu());
    notScroll.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('menu-burger-action');
        if (menu.hasClass('menu-burger-action')) {
            $("body").css('overflow', 'hidden');
            $("header").css('opacity', '1');
        } else {
            $("body").css('overflow', 'visible');
            $("header").css('opacity', '0.8');
        }
    }
}
burgerMenu('.menu-burger');