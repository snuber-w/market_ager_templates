if (document.getElementById("menu")) {
  const menuBtn = document.getElementById("menu");
  const closeMenuBtn = document.getElementById("menu-close");

  console.log(menuBtn);

  menuBtn.addEventListener('click', () => {
    event.preventDefault();

    document.querySelector(".burger__menu").style.right = 0;
    document.querySelector(".burger__menu").style.left = 0;
  });
  closeMenuBtn.addEventListener('click', () => {
    event.preventDefault();

    document.querySelector(".burger__menu").style.right = "150vw";
    document.querySelector(".burger__menu").style.left = "-150vw";
  });
}