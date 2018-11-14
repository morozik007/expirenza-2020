var $ = require("jquery");
window.jQuery = $;
import 'slick-carousel';
require("@fancyapps/fancybox");
//import popper from 'popper.js';
//import bootstrap from 'bootstrap';



$(function() {
    //jQuery('body').css('color', 'red');
    console.log('working');

    $('.menu-toggle').click(function(){
		$(this).toggleClass('active');
		$('.navigation').toggleClass('open');
	});

    $('a.navigation__link[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('.menu-toggle').toggleClass('active');
        $('.navigation').toggleClass('open');

        $('html, body').animate({
            'scrollTop': $target.offset().top-80
        }, 1000, 'swing');
    });

    $('[data-fancybox]').fancybox({
        touch: {
            vertical: false, // Allow to drag content vertically
            momentum: false // Continue movement after releasing mouse/touch when panning
        }
    });

    $('.oppo__slider').slick();

    

    //    
});