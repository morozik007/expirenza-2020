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