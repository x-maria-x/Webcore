let main = document.querySelector(".main");
let header = document.querySelector(".header");
let body = document.querySelector("body");

// открытие сайдбара
let btn_menu_open = document.querySelector(".round-button-burger");
let modalSidebar = document.querySelector(".sidebar");
btn_menu_open.addEventListener("click", () => {
  modalSidebar.classList.add("modal_active");
  main.classList.add("blur");
  header.classList.add("blur");
  body.classList.add("scroll-lock");
});

// закрытие сайдбара
let btn_menu_close = document.querySelector(".sidebar__btn-close");
btn_menu_close.addEventListener("click", () => {
  modalSidebar.classList.remove("modal_active");
  main.classList.remove("blur");
  header.classList.remove("blur");
  body.classList.remove("scroll-lock");
});

// закрытие сайдбара при нажатии вне
body.addEventListener("click", (event) => {
  if (
    modalSidebar.classList.contains("modal_active") &&
    event.target !== btn_menu_open &&
    event.target.offsetParent?.className.indexOf("sidebar") === -1
  ) {
    modalSidebar.classList.remove("modal_active");
    main.classList.remove("blur");
    header.classList.remove("blur");
    body.classList.remove("scroll-lock");
  }
});

// открытие модалки звонок
let btn_modalCall_open = document.querySelectorAll(".round-button-call");
let modalCall = document.querySelector(".modal-call");
for (let i = 0; i < btn_modalCall_open.length; i++) {
  btn_modalCall_open[i].addEventListener("click", () => {
    modalCall.classList.add("modal_active");
    main.classList.add("blur");
    header.classList.add("blur");
    body.classList.add("scroll-lock");
  });
}

// закрытие модалки звонок
let btn_modalCall_close = document.querySelector(".modal-call--close");
btn_modalCall_close.addEventListener("click", () => {
  modalCall.classList.remove("modal_active");
  main.classList.remove("blur");
  header.classList.remove("blur");
  body.classList.remove("scroll-lock");
});

// закрытие модалки звонок при нажатии вне
body.addEventListener("click", (event) => {
    if (
      modalCall.classList.contains("modal_active") &&
      !event.target.classList.value.includes("round-button-call") &&
      event.target.offsetParent?.className.indexOf("modal-call") === -1
    ) {
      modalCall.classList.remove("modal_active");
      main.classList.remove("blur");
      header.classList.remove("blur");
      body.classList.remove("scroll-lock");
    }
});

// открытие модалки сообщение
let btn_modalMessage_open = document.querySelectorAll(".round-button-chat");
let modalMessage = document.querySelector(".modal-feedback");
for (let i = 0; i < btn_modalMessage_open.length; i++) {
  btn_modalMessage_open[i].addEventListener("click", () => {
    modalMessage.classList.add("modal_active");
    main.classList.add("blur");
    header.classList.add("blur");
    body.classList.add("scroll-lock");
  });
}

// закрытие модалки сообщение
let btn_modalMessage_close = document.querySelector(".modal-feedback--close");
btn_modalMessage_close.addEventListener("click", () => {
  modalMessage.classList.remove("modal_active");
  main.classList.remove("blur");
  header.classList.remove("blur");
  body.classList.remove("scroll-lock");
});

// закрытие модалки чат при нажатии вне
body.addEventListener("click", (event) => {
    if (
      modalMessage.classList.contains("modal_active") &&
      !event.target.classList.value.includes("round-button-chat") &&
      event.target.offsetParent?.className.indexOf("modal-feedback") === -1
    ) {
      modalMessage.classList.remove("modal_active");
      main.classList.remove("blur");
      header.classList.remove("blur");
      body.classList.remove("scroll-lock");
    }
});

// кнопка "читать далее" для текста в описании
let read_more_descriptionText = document.querySelector(
  ".main__description-read-more"
);
let descriptionText = document.querySelector(".main__description-text");
read_more_descriptionText.onclick = () => {
  descriptionText.classList.toggle("read-more_show");
  descriptionText.classList.toggle("gradient-display-none");
  read_more_descriptionText.classList.toggle("pseudo-class-rotate");
  if (descriptionText.classList.contains("read-more_show")) {
    read_more_descriptionText.textContent = "Скрыть";
  }
  if (!descriptionText.classList.contains("read-more_show")) {
    read_more_descriptionText.textContent = "Читать далее";
  }
};

// кнопка "показать еще" в слайдере различных брендов
let read_more_swiper_logo = document.querySelector(".swiper-logo-read-more");
let swiper_items_logo = document.querySelector(".slider-logo");
read_more_swiper_logo.onclick = () => {
  swiper_items_logo.classList.toggle("read-more_show");
  read_more_swiper_logo.classList.toggle("pseudo-class-rotate");
  if (swiper_items_logo.classList.contains("read-more_show")) {
    read_more_swiper_logo.textContent = "Скрыть";
  }
  if (!swiper_items_logo.classList.contains("read-more_show")) {
    read_more_swiper_logo.textContent = "Показать еще";
  }
};

// кнопка "показать еще" в слайдере различных видов техники
let read_more_swiper_type = document.querySelector(".swiper-type-read-more");
let swiper_items_type = document.querySelector(".slider-type");
read_more_swiper_type.onclick = () => {
  swiper_items_type.classList.toggle("read-more_show");
  read_more_swiper_type.classList.toggle("pseudo-class-rotate");
  if (swiper_items_type.classList.contains("read-more_show")) {
    read_more_swiper_type.textContent = "Скрыть";
  }
  if (!swiper_items_type.classList.contains("read-more_show")) {
    read_more_swiper_type.textContent = "Показать еще";
  }
};

/* Swiper
 **************************************************************/
var swiper = Swiper;
var init = false;

/* Which media query
 **************************************************************/
function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
  let tablet_desktop = window.matchMedia("(min-width: 769px) ");

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;

      swiper_logo = new Swiper(".slider-logo", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      swiper_type = new Swiper(".slider-type", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      swiper_price = new Swiper(".slider-price", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
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
window.addEventListener("load", function () {
  swiperMode();
});

/* On Resize
 **************************************************************/
window.addEventListener("resize", function () {
  swiperMode();
});
