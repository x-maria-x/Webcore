// открытие сайдбара
let btn_menu_open = document.querySelector(".header__btn-burger");
btn_menu_open.onclick = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add('sidebar_show');
    document.querySelector('.main').classList.add('blur');
    document.querySelector('.header').classList.add('blur');
}

// закрытие сайдбара
let btn_menu_close = document.querySelector(".sidebar__btn-close");
btn_menu_close.onclick = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove('sidebar_show');
    document.querySelector('.main').classList.remove('blur');
    document.querySelector('.header').classList.remove('blur');
}



// открытие модалки звонок
let btn_modalCall_open = document.querySelectorAll(".header__btn-call");
for (let i = 0; i < btn_modalCall_open.length; i++) {
    btn_modalCall_open[i].addEventListener ('click',  () => {
    let modalCall = document.querySelector(".modal-call");
    modalCall.classList.add('active');
    document.querySelector('.main').classList.add('blur');
    document.querySelector('.header').classList.add('blur');
})
}

// закрытие модалки звонок
let btn_modalCall_close = document.querySelector(".modal-call--close");
btn_modalCall_close.addEventListener ('click',  () => {
    let modalCall = document.querySelector(".modal-call");
    modalCall.classList.remove('active');
    document.querySelector('.main').classList.remove('blur');
    document.querySelector('.header').classList.remove('blur');
})

// открытие модалки сообщение
let btn_modalMessage_open = document.querySelectorAll(".header__btn-chat");
for (let i = 0; i < btn_modalMessage_open.length; i++) {
    btn_modalMessage_open[i].addEventListener ('click',  () => {
    let modalMessage = document.querySelector(".modal-feedback");
    modalMessage.classList.add('active');
    document.querySelector('.main').classList.add('blur');
    document.querySelector('.header').classList.add('blur');
})
}

// закрытие модалки сообщение
let btn_modalMessage_close = document.querySelector(".modal-feedback--close");
btn_modalMessage_close.addEventListener ('click',  () => {
    let modalMessage = document.querySelector(".modal-feedback");
    modalMessage.classList.remove('active');
    document.querySelector('.main').classList.remove('blur');
    document.querySelector('.header').classList.remove('blur');
})



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
let read_more_swiper_logo = document.querySelector('.swiper-logo-read-more');
let swiper_items_logo = document.querySelector('.slider-logo')
read_more_swiper_logo.onclick = () => {
    swiper_items_logo.classList.toggle('read-more-show');
    read_more_swiper_logo.classList.toggle('pseudo-class-rotate');
    if (swiper_items_logo.classList.contains('read-more-show')) {
        read_more_swiper_logo.textContent = 'Скрыть'
        
    }
    if (!swiper_items_logo.classList.contains('read-more-show')) {
        read_more_swiper_logo.textContent = 'Показать еще'
    }
}

// кнопка "показать еще" в слайдере различных видов техники
let read_more_swiper_type = document.querySelector('.swiper-type-read-more');
let swiper_items_type = document.querySelector('.slider-type')
read_more_swiper_type.onclick = () => {
    swiper_items_type.classList.toggle('read-more-show');
    read_more_swiper_type.classList.toggle('pseudo-class-rotate');
    if (swiper_items_type.classList.contains('read-more-show')) {
        read_more_swiper_type.textContent = 'Скрыть'

    }
    if (!swiper_items_type.classList.contains('read-more-show')) {
        read_more_swiper_type.textContent = 'Показать еще'
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
            
            swiper_logo = new Swiper('.slider-logo', {
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            swiper_type = new Swiper('.slider-type', {
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            
            swiper_price = new Swiper('.slider-price', {
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
            swiper_logo.destroy();
            swiper_type.destroy();
            swiper_price.destroy();
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