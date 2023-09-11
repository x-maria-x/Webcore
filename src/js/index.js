const body = document.querySelector("body");

let btn_menu_open = document.querySelector(".round-button_burger");
btn_menu_open.addEventListener("click", () => showModal(true, ".sidebar"));

let btn_menu_close = document.querySelector(".sidebar__btn-close");
btn_menu_close.addEventListener("click", () => showModal(false, ".sidebar"));

body.addEventListener(
  "click",
  (event) =>
    closeModal(event, false, ".sidebar", ".round-button_burger", "sidebar"),
  true
);

let btn_modalCall_open = document.querySelectorAll(".round-button_call");
for (let i = 0; i < btn_modalCall_open.length; i++) {
  btn_modalCall_open[i].addEventListener("click", () =>
    showModal(true, ".modal-call")
  );
}

let btn_modalCall_close = document.querySelector(".modal-call--close");
btn_modalCall_close.addEventListener("click", () =>
  showModal(false, ".modal-call")
);

body.addEventListener(
  "click",
  (event) =>
    closeModal(event, false, ".modal-call", ".round-button_call", "modal-call"),
  true
);

let btn_modalMessage_open = document.querySelectorAll(".round-button_chat");
for (let i = 0; i < btn_modalMessage_open.length; i++) {
  btn_modalMessage_open[i].addEventListener("click", () =>
    showModal(true, ".modal-feedback")
  );
}

let btn_modalMessage_close = document.querySelector(".modal-feedback--close");
btn_modalMessage_close.addEventListener("click", () =>
  showModal(false, ".modal-feedback")
);

body.addEventListener(
  "click",
  (event) =>
    closeModal(
      event,
      false,
      ".modal-feedback",
      ".round-button_chat",
      "modal-feedback"
    ),
  true
);

let read_more_descriptionText = document.querySelector(
  ".main__description-read-more"
);
read_more_descriptionText.addEventListener("click", () =>
  readMore(
    ".main__description-text",
    read_more_descriptionText,
    true,
    "Читать далее"
  )
);

let read_more_swiper_logo = document.querySelector(".swiper-logo-read-more");
read_more_swiper_logo.addEventListener("click", () =>
  readMore(".slider-logo", read_more_swiper_logo, false, "Показать еще")
);

let read_more_swiper_type = document.querySelector(".swiper-type-read-more");
read_more_swiper_type.addEventListener("click", () =>
  readMore(".slider-type", read_more_swiper_type, false, "Показать еще")
);

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});
