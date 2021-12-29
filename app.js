/* =================
    Hamburger Menu
   ================= */

const hamburger = document.querySelector(".header .nav-list .hamburger");
const mobileMenu = document.querySelector(".header .nav-list ul");
const menuItem = document.querySelectorAll(".header .nav-list a");
const header = document.querySelector(".header.container");

// open/close the menu when you click the hamburger
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// close the menu when you click menu-item
menuItem.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});

// change the menu's background-color when you scroll
document.addEventListener("scroll", ()=>{
    let scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});