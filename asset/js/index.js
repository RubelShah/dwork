let mobileMuneclose = document.getElementById('mobile-menu-close');
let tabMune = document.getElementById('tab-section');
mobileMuneclose.addEventListener('click',function(){
  tabMune.style.display = 'none';
  if(screen.width < 992){
    flotingBar.style.display = 'flex';
  }else{
    flotingBar.style.display = 'none';
  }
});

let productGrid = document.getElementById('product-grid');
let flotingBar = document.getElementById('floting-bar');
productGrid.addEventListener('click',function(){
  tabMune.style.display = 'block';
  flotingBar.style.display = 'none';
});

/********************************************** */ 
  var swiper = new Swiper(".mySwiper", {
    // slidesPerView: "auto",
    spaceBetween: 20,
    navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints:{
        360:{
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        400:{
          slidesPerView:"auto",
          spaceBetween: 20,
        },
        576:{
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        768:{
          slidesPerView:"auto",
          spaceBetween: 20,
        },
      992:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
/*********************************************************/
