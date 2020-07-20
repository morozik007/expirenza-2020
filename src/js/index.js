console.log('it works');

const _body = document.body;
const toggle = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  _body.toggleAttribute('data-menu');
});