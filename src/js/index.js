import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

console.log('it works');

const _body = document.body;
const toggle = document.getElementById('mobile-menu');
const toggleClose = document.getElementById('mobile-menu-close');

toggle.addEventListener('click', () => {
  _body.toggleAttribute('data-menu');
});

toggleClose.addEventListener('click', () => {
  _body.toggleAttribute('data-menu');
});

var mySwiper = new Swiper('.reviews-slider', {
  //loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.reviews-slider__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.reviews-slider__next',
    prevEl: '.reviews-slider__prev',
  },

})