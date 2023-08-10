var slidePodcast = new Swiper(".slidePodcast", {
    slidesPerView: 4,
    spaceBetween: 32,
    pagination: {
      el: ".sPodcast .top .swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".sPodcast .top .btnNext",
        prevEl: ".sPodcast .top .btnPrev"
    },
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      }
    }
});


// Botão scroll top
const btnScrollTop = document.getElementById('jsBtnScrollTop');

btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})


//Botão mobile
const btnMobile = document.getElementById('jsBtnMobile')

btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('is-active')
  document.documentElement.classList.toggle('menuOpened')
})


