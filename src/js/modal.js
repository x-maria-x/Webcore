const main = document.querySelector(".main");
const header = document.querySelector(".header");

function showModal(isShow, modalClass) {
  let modal = document.querySelector(modalClass);
  if (isShow) {
    modal.classList.add("modal_active");
    main.classList.add("blur");
    header.classList.add("blur");
    body.classList.add("scroll-lock");
  } else {
    modal.classList.remove("modal_active");
    main.classList.remove("blur");
    header.classList.remove("blur");
    body.classList.remove("scroll-lock");
  }
}

function closeModal(event, isShow, modalClass, buttonOpen, className) {
  let modal = document.querySelector(modalClass);
  let btnOpen = document.querySelector(buttonOpen);
  if (
    modal.classList.contains("modal_active") &&
    !event.target.classList.value.includes(btnOpen) &&
    event.target.offsetParent?.className.indexOf(className) === -1
  ) {
    showModal(isShow, modalClass);
  }
}
