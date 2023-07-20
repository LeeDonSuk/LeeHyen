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
  allowTouchMove: true, // 드래그 기능 활성화
});



const swiperContainer = document.querySelector(".swiper-wrapper");
let isDragging = false;
let startPosX, startPosY;
let startScrollLeft;

swiperContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPosX = e.clientX;
  startScrollLeft = swiperContainer.scrollLeft;

  // 드래그 시작 시 커서 모양 변경
  swiperContainer.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const moveX = e.clientX - startPosX;
  swiperContainer.scrollLeft = startScrollLeft - moveX;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  // 드래그 종료 시 커서 모양 변경
  swiperContainer.style.cursor = "grab";
});