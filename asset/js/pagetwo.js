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
        // loop: true,
        // loopFillGroupWithBlank: true,
        spaceBetween: 10,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

//variables
let readMore = document.getElementById('read-more1');
let paraGraph = document.querySelector('.paragraph');


readMore.addEventListener('click',function(){
  if(readMore.innerText == 'Read More'){
    readMore.innerText = 'Read Less';
  }else{
    readMore.innerText = 'Read More';
    let objControl=document.getElementById("jump");
    window.scrollTo({top: objControl.offsetTop-250, behavior: 'smooth'});
  }
  paraGraph.classList.toggle('active-p');
})
/*******************************************/
let readMore2 = document.getElementById('read-more2');
let paraGraph2 = document.querySelector('.paragraph2');


readMore2.addEventListener('click',function(){
  if(readMore2.innerText == 'Read More'){
    readMore2.innerText = 'Read Less';
  }else{
    readMore2.innerText = 'Read More';
    let objControl=document.getElementById("jump2");
    window.scrollTo({top: objControl.offsetTop-250, behavior: 'smooth'});
  }
  paraGraph2.classList.toggle('active-p');
})