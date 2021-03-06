const burger = document.getElementById('burger-icon');
const hdrNav = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
  hdrNav.classList.toggle('active');
  if (hdrNav.classList.contains('active')) {
    burger.src = './images/icon-close.svg';
    burger.style.position = 'fixed';
  } else {
    burger.src = './images/icon-hamburger.svg';
    burger.style.position = 'unset';
  }
});
