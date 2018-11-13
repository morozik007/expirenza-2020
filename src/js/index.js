import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
//import popper from 'popper.js';
//import bootstrap from 'bootstrap';

$(function() {
    //jQuery('body').css('color', 'red');
    console.log('working');

    $(".oppo__slider").slick();
    
});