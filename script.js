const burger = document.getElementById('burger-icon');
const xIcon = document.getElementById('cross-icon');
const hdrNav = document.querySelector('.header__navigation');
const catNav = document.querySelectorAll('.main__category');
const subNav = document.querySelectorAll('.sub__navigation');

burger.addEventListener('click', () => {
  hdrNav.classList.toggle('active');
  xIcon.style.display = 'unset';
  burger.style.display = 'none';
});

xIcon.addEventListener('click', () => {
  hdrNav.classList.toggle('active');
  xIcon.style.display = 'none';
  burger.style.display = 'unset';
});
