const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    header.classList.add("show-menu");
  }

  if (window.scrollY < 70) {
    header.classList.remove("show-menu");
  }
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener('click', () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
  })


