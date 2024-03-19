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

  document.body.style.overflow = "hidden";
}

function handleMenuClose(event) {
  event.preventDefault();
  const burgerMenu = document.querySelector(".burger__menu");
  burgerMenu.style.right = "200vw";
  burgerMenu.style.left = "-150vw";

  document.body.style.overflow = "auto";
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}