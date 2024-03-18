const menuBtn = document.getElementById("menu");
const closeMenuBtn = document.getElementById("menu-close");

if (menuBtn && closeMenuBtn) {
  menuBtn.addEventListener('click', handleMenuOpen);
  closeMenuBtn.addEventListener('click', handleMenuClose);
}

function handleMenuOpen(event) {
  event.preventDefault();
  const burgerMenu = document.querySelector(".burger__menu");
  burgerMenu.style.right = "0";
  burgerMenu.style.left = "0";
}

function handleMenuClose(event) {
  event.preventDefault();
  const burgerMenu = document.querySelector(".burger__menu");
  burgerMenu.style.right = "200vw";
  burgerMenu.style.left = "-150vw";
}
