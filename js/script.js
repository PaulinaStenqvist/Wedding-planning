const toggleButton = document.getElementById('toggleButton');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
navbar.classList.toggle('active');
});



var swiper = new Swiper(".home-slider", {
    loop:true,
    spaceBetween:20,
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    
});

var swiper = new Swiper(".service-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});