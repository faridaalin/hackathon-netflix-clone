
let burger = document.querySelector(".burger");
let nav = document.querySelector("#" + burger.dataset.target);

const navbar = () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
};

burger.addEventListener("click", navbar);
