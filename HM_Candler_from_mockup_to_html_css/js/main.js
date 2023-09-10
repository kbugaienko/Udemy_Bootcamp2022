const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__header-list');

menuBtn.addEventListener('click', ()=> {
  menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper('.feedback__slider', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperTwo = new Swiper('.certificates__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
