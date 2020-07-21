import Swiper, { Navigation, Pagination } from 'swiper';
import elementClass from 'element-class';

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
});

const accordionItem = document.getElementsByClassName('c-accordion__item');
const accordionTitle = document.getElementsByClassName('c-accordion__title');
var i;

for (i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode;
    
    if (itemClass.classList.contains('c-accordion__item--is-open')) {
        elementClass(itemClass).remove('c-accordion__item--is-open');
    }
    else {
        for (i = 0; i < accordionItem.length; i++) {
            elementClass(accordionItem[i]).remove('c-accordion__item--is-open');
        }
        elementClass(itemClass).add('c-accordion__item--is-open');
    }
}