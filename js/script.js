// открытие сайдбара
let btn_menu_open = document.querySelector(".header__btn-burger");
btn_menu_open.onclick = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add('sidebar_show');
}

// закрытие сайдбара
let btn_menu_close = document.querySelector(".sidebar__btn-close");
btn_menu_close.onclick = (event) => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove('sidebar_show');
}

// кнопка "читать далее" для текста в описании
let read_more_descriptionText = document.querySelector('.main__description-read-more');
let descriptionText = document.querySelector('.main__description-text')
read_more_descriptionText.onclick = () => {
    descriptionText.classList.toggle('read-more-show');
    descriptionText.classList.toggle('gradient-display-none');
    read_more_descriptionText.classList.toggle('pseudo-class-rotate');
    if (descriptionText.classList.contains('read-more-show')) {
        read_more_descriptionText.textContent = 'Скрыть'

    }
    if (!descriptionText.classList.contains('read-more-show')) {
        read_more_descriptionText.textContent = 'Читать далее';

    }
}

// кнопка "показать еще" в слайдере различных брендов
let read_more_swiper = document.querySelector('.swiper-read-more');
let swiper_items = document.querySelector('.swiper-container')
read_more_swiper.onclick = () => {
    swiper_items.classList.toggle('read-more-show');
    read_more_swiper.classList.toggle('pseudo-class-rotate');
    if (swiper_items.classList.contains('read-more-show')) {
        read_more_swiper.textContent = 'Скрыть'
        

    }
    if (!swiper_items.classList.contains('read-more-show')) {
        read_more_swiper.textContent = 'Показать еще'
    }
}



/* Swiper
**************************************************************/
var swiper= Swiper;
var init = false;

/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet_desktop = window.matchMedia('(min-width: 769px) ');
    
    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                
            });
        }

    }

    // Disable (for tablet)
    else if (tablet_desktop.matches) {
        if (init) {
            swiper.destroy();
            init = false;
        }
        
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