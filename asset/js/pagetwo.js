let breadCum = document.querySelector('#breadcum-scroll');
let hideBread = document.querySelector('#hide-bread');
let breadCumsection = document.querySelector('#breadcumsection');
document.addEventListener('scroll',()=>{
    if(window.scrollY >=50){
        breadCum.classList.add('bread-show');
        hideBread.classList.add('heide-cum');
    }else{
      breadCum.classList.remove('bread-show');
      hideBread.classList.remove('heide-cum');
    }
});

let mobileMuneclose = document.getElementById('mobile-menu-close');
let tabMune = document.getElementById('tab-section');
var x = window.matchMedia("(max-width: 991px)")
mobileMuneclose.addEventListener('click',function(){
    flotingBar.style.display = 'flex';
    tabMune.style.display = 'none';
  
});



let productGrid = document.getElementById('product-grid');
let flotingBar = document.getElementById('floting-bar');
productGrid.addEventListener('click',function(){
  tabMune.style.display = 'block';
  flotingBar.style.display = 'none';
});

// swiper-js
      let swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          360: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView:4
          },
          991: {
            slidesPerView: 5
          },
        },
      });
/******************************************************************/
      var swiper2 = new Swiper(".tabSwiper", {
        slidesPerView: 4,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
