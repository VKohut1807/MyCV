"use strict";
$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
        autoplaySpeed: 3000,
        centerMode: true,
  		slidesToShow: 3,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1
				}
			}
		]
    });
});