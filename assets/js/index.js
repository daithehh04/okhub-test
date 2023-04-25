const navTogglers = document.querySelectorAll("[data-nav-toggle]");

const navbar = document.querySelector("[data-navbar]");
const headerNav = document.querySelector("nav.navbar");
console.log(headerNav)

navTogglers.forEach((navToggler) => {
    navToggler.onclick = function () {
        navbar.classList.toggle("active");
    }
})

window.addEventListener("scroll", headerActive)
function headerActive() {
    if (window.scrollY > 100) {
        headerNav.classList.add("active");
    } else {
        headerNav.classList.remove("active");
    }
}


window.addEventListener("scroll", headerSticky)
let lastScrolledPos = 0;
function headerSticky() {
    if (lastScrolledPos >= window.scrollY) {
        headerNav.classList.remove("header-hide");
    } else {
        headerNav.classList.add("header-hide");
    }

    lastScrolledPos = window.scrollY;
}