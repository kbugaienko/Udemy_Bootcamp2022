const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__header-list');

menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
});
