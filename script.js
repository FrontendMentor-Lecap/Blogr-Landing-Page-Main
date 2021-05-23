const burger = document.getElementById('burger-icon');
const hdrNav = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
  hdrNav.classList.toggle('mobile');
});
