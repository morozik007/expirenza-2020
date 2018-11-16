var $ = require("jquery");
window.jQuery = $;
import 'slick-carousel';
require("@fancyapps/fancybox");
require("jquery-validation");
//import popper from 'popper.js';
//import bootstrap from 'bootstrap';

$(function() {

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
    $('.video__slider').slick({
        dots: true
    });

    $("#first-try-form").validate();
    $("#second-try-form").validate();
    $("#popup-try-form").validate();

    $('#first-try-form input').bind('keyup blur click', function () { 
        if ($('#first-try-form').validate().checkForm()) {                   
            $('#first-try-submit').removeClass('button_disabled').prop('disabled', false); 
        } else {
            $('#first-try-submit').addClass('button_disabled').prop('disabled', true);
        }
    });

    $('#second-try-form input').bind('keyup blur click', function () { 
        if ($('#second-try-form').validate().checkForm()) {                   
            $('#second-try-submit').removeClass('button_disabled').prop('disabled', false); 
        } else {
            $('#second-try-submit').addClass('button_disabled').prop('disabled', true);
        }
    });

    $('#popup-try-form input').bind('keyup blur click', function () { 
        if ($('#popup-try-form').validate().checkForm()) {                   
            $('#popup-try-submit').removeClass('button_disabled').prop('disabled', false); 
        } else {
            $('#popup-try-submit').addClass('button_disabled').prop('disabled', true);
        }
    });

    $('.sendForm').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            dataType: 'json',
            type: $(this).attr('method'),
            success: function(data) {
                if(data.status == 'ok') {
                    console.log('submitted');
                    $.fancybox.close();
                    $.fancybox.open({ 
                        src: '#thanks',
                        baseClass: 'popup-transparent'
                    });
                } else {
                    console.log('fail');
                }
            },
            error: function() {
                console.log('error');
                $.fancybox.open('<div class="message"><h2>Oops!</h2><p>Something went wrong</p></div>');
            }
        });
    });

    

    //    
});