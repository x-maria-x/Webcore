let btn_menu_open = document.querySelector(".header__btn-burger");
btn_menu_open.onclick = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add('sidebar_show');
}

let btn_menu_close = document.querySelector(".sidebar__btn-close");
btn_menu_close.onclick = (event) => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove('sidebar_show');
}

// let read_more_description = document.querySelector('.main__description-read-more');
// let description_text = document.querySelector('.main__description-text')
// read_more_description.onclick = () => {
//     description_text.style = 'overflow:visible; height: auto; '
// }

/*
// работает, но только 1 раз, чтобы открыть
let read_more_swiper = document.querySelector('.swiper-read-more');
let swiper_items = document.querySelector('.swiper-container')
read_more_swiper.onclick = () => {
    swiper_items.style = 'overflow:visible; height: auto; '
}
*/

let read_more_swiper = document.querySelector('.swiper-read-more');
let swiper_items = document.querySelector('.swiper-container')
read_more_swiper.onclick = () => {
    swiper_items.classList.toggle('read-more-show');
    if (swiper_items.classList.contains('read-more-show')) {
        read_more_swiper.textContent = 'Скрыть'
    }
    if (!swiper_items.classList.contains('read-more-show')) {
        read_more_swiper.textContent = 'Показать еще'
    }
}


/*
var sliderLogo = new Swiper('.slider-logo', {
    // observer: true,
    // observeParents: true,
    // loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
    // freeMode: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerGroup: 1,
    loop: true,
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1.2,
    //     },
    //     600: {
    //         slidesPerView: 2.2,
    //     },
    //     720: {
    //         slidesPerView: 2.8,
    //     },
    // }

});
*/


/* Swiper
**************************************************************/
var swiper= Swiper;
var init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 16,
                // direction: 'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});