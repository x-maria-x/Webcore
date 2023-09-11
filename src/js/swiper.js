let swiper = Swiper;
let init = false;

function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
  let tablet_desktop = window.matchMedia("(min-width: 769px) ");

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
  } else if (tablet_desktop.matches) {
    if (init) {
      swiper_logo.destroy();
      swiper_type.destroy();
      swiper_price.destroy();
      init = false;
    }
  }
}
