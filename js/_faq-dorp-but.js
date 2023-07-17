const btns = document.querySelectorAll(".faq-drop-but");
const items = document.querySelectorAll(".faq-items");
const list = document.querySelectorAll(".faq-lis");

let activeIndex = -1; // 기본값은 -1로 설정

btns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        if (activeIndex !== -1 && activeIndex !== index) {
            btns[activeIndex].classList.remove("after-on");
            items[activeIndex].classList.remove("active");
            list[activeIndex].classList.remove("active");
        }

        btn.classList.toggle("after-on");
        items[index].classList.toggle("active");
        list[index].classList.toggle("active");

        // "faq-lis" 클래스를 토글
        list[index].classList.toggle("list-active");

        activeIndex = activeIndex === index ? -1 : index; // 현재 클릭한 버튼의 인덱스를 기록
    });
});