var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  slidesPerView: 1, // 슬라이드 갯수를 1개로 설정
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
  breakpointsInverse: true,
  allowTouchMove: true, // 드래그 기능 활성화
});
