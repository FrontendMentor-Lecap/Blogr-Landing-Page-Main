# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [https://github.com/FrontendMentor-Lecap/Blogr-Landing-Page-Main]
- Live Site URL: [https://frontendmentor-lecap.github.io/Blogr-Landing-Page-Main/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

This project was a complete turnaround for me and my coding skills. It was the first time in my whole journey in Frontend Mentor that I had to create a complete page and not only a component of it. Challenge had a mixture of dares, as it was positioning images differently depending on screensize, positioning and sizing of multiple backgrounds, two types of font families insted of one, etc.

I believe the most important learning I gathered had to do with the header and footer navigation. Navbar was a complete challenge for me since it incorporated CSS and JS and depending if it was for mobile or for desktop they had different implementations. For desktop I used CSS only with pseudo-class:

```css
.main__category:hover .sub__navigation {
  height: auto;
  opacity: 1;
}
```

In this case the sub-navigation unordered list was hidden with a height and opacity of 0, when the user hovers over the main title the child navigation element appears.

For mobile users I incorporated different approaches that challenged me, I believe a lot of cleaning to the code can be done.
In order to open a main category into a sub-category, a checkbox input was included and hidden, so when I click on the label (category title), input is now checked and sub-navigation appears:

```css
.main__category input:checked ~ .sub__navigation {
  display: block;
  position: relative;
}
```

Another thing I implemented was the burger icon which I used JS not only to change between burger and cross but also to toggle between showing and hiding navigation. I know code could be much cleaner or even deleted completely but this works for me as an educational aid:

```js
const burger = document.getElementById('burger-icon');
const hdrNav = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
  hdrNav.classList.toggle('active');
  if (hdrNav.classList.contains('active')) {
    burger.src = './images/icon-close.svg';
  } else {
    burger.src = './images/icon-hamburger.svg';
  }
});
```

It was a complete and challenging project that gave me an idea of how I could work with a real webpage in the future.

### Continued development

I need to continue developing my skills regarding abject manipulation and general JS utilization in different type of situations. I have to also improve technique on background layering positioning and sizing.
