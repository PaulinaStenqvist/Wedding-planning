let menu = document.querySelector('menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toogle('fa-times');
    navbar.classList.toogle('active');
}