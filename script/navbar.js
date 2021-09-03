const hButton = document.querySelector('.hamburger-button');
const [fLine,mLine,lLine] = document.querySelectorAll('.hamburger-item');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('.nav-menu');
 

hButton.addEventListener('click', () => {
    fLine.classList.toggle('button-click-first');
    mLine.classList.toggle('button-click-hide');
    lLine.classList.toggle('button-click-last');
    nav.classList.toggle('nav-height');
    setTimeout(() => {navMenu.classList.toggle('display-nav');},400)
    
});