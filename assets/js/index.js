const navTogglers = document.querySelectorAll("[data-nav-toggle]");
const navbar = document.querySelector("[data-navbar]");
const headerNav = document.querySelector("nav.navbar");

// Toggle menu mobile
navTogglers.forEach((navToggler) => {
    navToggler.onclick = function () {
        navbar.classList.toggle("active");
    }
})

// Header scroll active
window.addEventListener("scroll", headerActive)
function headerActive() {
    if (window.scrollY > 100) {
        headerNav.classList.add("active");
    } else {
        headerNav.classList.remove("active");
    }
}

// Scroll toggle header
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

// Slide banner
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );

  Splide.defaults = {
    type   : 'loop',
    autoplay: true,
    arrows: false,
    pagination: false,
    interval: number = 3000
  }
  
// Slide tours
  const splide = new Splide( '#tour-carousel', {
    // type: 'loop',
    perPage: 3,
    focus  : 0,
    omitEnd: true,
    autoplay: true,
    interval: number = 5000,
    arrows: boolean = false
  } );


  new Splide( '.splide', {
    classes: {
          arrows: 'splide__arrows both-arr',
          arrow : 'splide__arrow arr',
          prev  : 'splide__arrow--prev arr-prev',
          next  : 'splide__arrow--next arr-next',
    },
  } );

  splide.mount();

  const titles = document.querySelectorAll('.tour-list .tab-item');
  const titleLinks = document.querySelectorAll('.tour-list .tab-item a');
  const images = document.querySelectorAll('.slides .slide-item'); 
  const slideList = document.querySelector('.slides .splide__list'); 

  titles.forEach((title,index) => {
    title.addEventListener('click', () => {
      document.querySelector('.tour-list .tab-item a.active').classList.remove('active');
      titleLinks[index].classList.add('active');
    });
  });


// Animation Section Scroll
const sections = document.querySelectorAll("[data-section]");
function scrollReveal() {
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight / 2) {
            section.classList.add("active");
        }
    })
}
window.addEventListener("scroll", scrollReveal)
scrollReveal();