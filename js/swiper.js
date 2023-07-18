var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  slides: 2,
  autoplay: 3000,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});