"use strict";
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