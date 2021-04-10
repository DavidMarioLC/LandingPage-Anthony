const menuHamburger = document.querySelector('#menu-hamburger');
const menu = document.querySelector('#menu');


menuHamburger.addEventListener('click',() => {
let isTrue =  menu.classList.toggle('show');
isTrue ? menuHamburger.textContent = 'Cerrar': menuHamburger.textContent = 'Menú';

})

menu.addEventListener('click',() => {
    let isTrue =  menu.classList.toggle('show');
    isTrue ? menuHamburger.textContent = 'Cerrar': menuHamburger.textContent = 'Menú';
    
})