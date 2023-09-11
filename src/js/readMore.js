function readMore(containerClass, button, isGradient, text) {
  let container = document.querySelector(containerClass);

  if (isGradient) {
    container.classList.toggle("gradient-display-none");
  }

  container.classList.toggle("read-more_show");
  button.classList.toggle("pseudo-class-rotate");
  if (container.classList.contains("read-more_show")) {
    button.textContent = "Скрыть";
  } else {
    button.textContent = text;
  }
}
