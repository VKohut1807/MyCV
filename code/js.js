"use strict";
function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}

function focusInput() {
    document.getElementById("name").focus();
}

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

// language change!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let dictionary = {
    "ua": {
        "menu": {
            "skills": "Навички",
            "technologies": "Технології:",
            "languages": "Мови:",
            "soft-skills": "Особисті якості:",
            "experience": "Досвід",
            "study": "Освіта",
            "myContact": "Контакт"
        },
        "button": {
            "contact": "Контакт",
            "send": "Надіслати",
        },
        "main": {
            "languages": {
                "ukrainian": "Українська",
                "russian": "Російська",
                "polish": "Польська",
                "english": "Англійська ",
            },
            "soft_skills": {
                "analytics": "Аналітика",
                "diligence": "Старанність",
                "efficiency": "Працьовитість",
                "precision": "Прецизія",
                "commitment": "Зосередженість на роботі",
                "ability": "Уміння працювати в групі",
                "openness": "Відкритість до нових викликів",
                "stress": "Здатність працювати в стресових ситуаціях"
            },
            "experience": {
                "position1": "Практикант / Стажування",
                "enterprise": "Створення програмного забезпечення для підтримки управління платформою - ",
                "angular8": "Програмування в Angular8",
                "maintenance": "Обслуговування платформи",
                "modification": "Допомога в управлінні і модифікації платформи",
                "modules": "Опрацювання нових модулів та їх впровадження",
                "position2": "Практикант",
                "registration": "Створення API, чат з логуванням",
                "client": "Клієнтська частина - ",
                "server": "Серверна частина - ",
                "programming": "Програмування в Angular8 та NodeJS",
                "real": "Маніпулювання повідомленнями в реальному часі - додавання, редагування, усунення повідомлень",
                "database": "Записування даних до MongoDB"
            },
            "study": {
                "university": "Університет Інформаційних Технологій та Менеджменту в Жешові, Польща",
                "studies": "(інженерське навчання)",
                "direction": "напрямок: Логістика,",
                "major": "Транспорт & Спедиція"
            }
        },
        "footer": {
            "languages": "Мови",
            "contact": "Контакт",
            "contact_text": {
                "location": "Жешів"
            },
            "subscribe": "Зв'язатися зі мною",
            "subscribe_text": {
                "name": "Ім'я та прізвище: (обов'язково)",
                "email": "Почта: (обов'язково)",
                "message": "Повідомлення: (обов'язково)"
            }
        }
    },
    "ru": {
        "menu": {
            "skills": "Навыки",
            "technologies": "Технологии:",
            "languages": "Языки:",
            "soft-skills": "Личные качества:",
            "experience": "Опыт",
            "study": "Образование",
            "myContact": "Контакт"
        },
        "button": {
            "contact": "Контакт",
            "send": "Отправить",
        },
        "main": {
            "languages": {
                "ukrainian": "Украинский",
                "russian": "Русский",
                "polish": "Польский",
                "english": "Английский",
            },
            "soft_skills": {
                "analytics": "Аналитика",
                "diligence": "Старательность",
                "efficiency": "Трудолюбие",
                "precision": "Прецизия",
                "commitment": "Сосредоточенность на работе",
                "ability": "Умение работать в группе",
                "openness": "Открытость к новым вызовам",
                "stress": "Способность работать в стрессовых ситуациях"
            },
            "experience": {
                "position1": "Практикант / Стажировка",
                "enterprise": "Создание программного обеспечения для поддержки управления платформой - ",
                "angular8": "Программирование в Angular8",
                "maintenance": "Обслуживание платформы",
                "modification": "Помощь в управлении и модификации платформы ",
                "modules": "Опрацювання нових модулів та їх впровадження",
                "position2": "Практикант",
                "registration": "Создание API, чат с регистрацией",
                "client": "Клиентская часть - ",
                "server": "Серверная часть - ",
                "programming": "Программирование в Angular8 и NodeJS",
                "real": "Манипулирование сообщениями в реальном времени - добавление, редактирование, устранение сообщений",
                "database": "Запись данных в MongoDB"
            },
            "study": {
                "university": "Университет Информационных Технологий и Менеджмента в Жешове, Польша",
                "studies": "(инженерская учеба)",
                "direction": "направление: Логистика,",
                "major": "Транспорт & Экспедиция"
            }
        },
        "footer": {
            "languages": "Языки",
            "contact": "Контакт",
            "contact_text": {
                "location": "Жешов"
            },
            "subscribe": "Связаться со мной",
            "subscribe_text": {
                "name": "Имя и фамилия: (обязательно)",
                "email": "Почта: (обязательно)",
                "message": "Сообщение: (обязательно)"
            }
        }
    },
    "pl": {
        "menu": {
            "skills": "Umiejętności",
            "technologies": "Technologie:",
            "languages": "Języki:",
            "soft-skills": "Umiejętności miękie:",
            "experience": "Doswiadczenie",
            "study": "Edukacja",
            "myContact": "Kontakt"
        },
        "button": {
            "contact": "Kontakt",
            "send": "Wyślij",
        },
        "main": {
            "languages": {
                "ukrainian": "Ukraiński",
                "russian": "Rosyjski",
                "polish": "Polski",
                "english": "Angielski",
            },
            "soft_skills": {
                "analytics": "Analityka",
                "diligence": "Staranność",
                "efficiency": "Pracowitość",
                "precision": "Precyzja",
                "commitment": "Zaangażowanie w pracy",
                "ability": "Umiejętność pracy w zespole",
                "openness": "Otwartość na nowe wyzwania",
                "stress": "Zdolność do harmonijnej pracy w warunkach stresu"
            },
            "experience": {
                "position1": "Praktykant / Stażysta",
                "enterprise": "Tworzenie oprogramowania wspomagającego w zarządzaniu przedsiębiorstwem - ",
                "angular8": "Programowanie pod Angular8",
                "maintenance": "Obsługa systemu",
                "modification": "Pomoc w zarządzaniu i modyfikacji treści",
                "modules": "Opracowanie nowych modułów i ich wdrożenie",
                "position2": "Praktykant",
                "registration": "Tworzenie API, czat z logowaniem",
                "client": "Część klienta - ",
                "server": "Część serwera - ",
                "programming": "Programowanie pod Angular8 oraz NodeJS",
                "real": "Manipulacja wiadomościami w czasie rzeczywistym - dodawanie, redagowanie, usuwanie wiadomości",
                "database": "Zapisywanie danych do MongoDB"
            },
            "study": {
                "university": "Wyższa Szkoła Informatyki i Zarządzania w Rzeszowie, Polska",
                "studies": "(studia inżynierskie)",
                "direction": "kierunek: Logistyka,",
                "major": "Transport & Spedycja"
            }
        },
        "footer": {
            "languages": "Języki",
            "contact": "Kontakt",
            "contact_text": {
                "location": "Rzeszów"
            },
            "subscribe": "Napisz do mnie",
            "subscribe_text": {
                "name": "Imię oraz nazwisko: (wymagane)",
                "email": "E-mail: (wymagane)",
                "message": "Wiadomość: (wymagane)"
            }
        }
    },
    "en": {
        "menu": {
            "skills": "Skills",
            "technologies": "Technologies:",
            "languages": "Languages:",
            "soft-skills": "Soft-skills:",
            "experience": "Experience",
            "study": "Study",
            "myContact": "Contact"
        },
        "button": {
            "contact": "Contact",
            "send": "Send",
        },
        "main": {
            "languages": {
                "ukrainian": "Ukrainian",
                "russian": "Russian",
                "polish": "Polish",
                "english": "English",
            },
            "soft_skills": {
                "analytics": "Analytics",
                "diligence": "Diligence",
                "efficiency": "Efficiency",
                "precision": "Precision",
                "commitment": "Commitment to work",
                "ability": "The ability to work in a team",
                "openness": "Openness to new challenges",
                "stress": "Ability to work under stress situations"
            },
            "experience": {
                "position1": "Apprentice / Intern",
                "enterprise": "Creation of software helping in a management an enterprise - ",
                "angular8": "Programming in Angular8",
                "maintenance": "Maintenance of the system",
                "modification": "Help in a management and modification of maintenance",
                "modules": "Development of the new modules and their introduction",
                "position2": "Apprentice",
                "registration": "Creation of API, chat with registration",
                "client": "Part of client - ",
                "server": "Part of server - ",
                "programming": "Programming in Angular8 also NodeJS",
                "real": "Manipulation by news during real - giving, editing, removing of report",
                "database": "Writing to the MongoDB"
            },
            "study": {
                "university": "University of Information Technology and Management in Rzeszow, Poland",
                "studies": "(engineering studies)",
                "direction": "in the field of: Logistics,",
                "major": "Transport & Spedition"
            },
        },
        "footer": {
            "languages": "Languages",
            "contact": "Contact",
            "contact_text": {
                "location": "Rzeszow"
            },
            "subscribe": "Contact with me",
            "subscribe_text": {
                "name": "Name and surnames: (required)",
                "email": "E-mail: (required)",
                "message": "Message: (required)"
            }
        }
    }
};
$(".lang").click(function() {
    let language = $(this).text().toLowerCase();
    if (dictionary.hasOwnProperty(language)) {
        set_lang(dictionary[language]);
    }
});
let set_lang = function (dictionary) {
    $("[data-translate]").text(function () {
        let key = $(this).data("translate");
        return parseSubObject(dictionary, key);
    });
};
function parseSubObject(obj, str) {
    let props = str.split(".");
    let thisProp = props.shift();
    if (obj.hasOwnProperty(thisProp)) {
        if (props.length == 0) {
            return obj[thisProp];
            alert(obj[thisProp]);
        } else {
            return parseSubObject(obj[thisProp], props.join('.'));
        }
    } else {
        return null;
    }
}
set_lang(dictionary.pl);

let option_footer = document.querySelectorAll('.option-footer');
option_footer[2].classList.add('color-special');
let elect = option_footer[2];
for( let i = 0; i < option_footer.length; i++ ){
    option_footer[i].addEventListener('click', function(){
        elect.classList.remove('color-special');
        this.classList.add('color-special');
        elect = this;
    });
}