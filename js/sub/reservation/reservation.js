function capmbtns() {
    const campbtn = document.querySelectorAll(".cam-list-btn > button");
    const tutle = document.querySelector(".status-progress >img");
    const framebtn = document.querySelector(".cambtn1");
    const framebtn3 = document.querySelector(".cambtn3");
    const framebtn5 = document.querySelector(".cambtn5");
    const iframe = document.querySelector("iframe");

    framebtn.addEventListener("click", function () {
        iframe.classList.remove("active");
        iframe.src = "http://xn--vh3b1l64u9pb68d9xkusfbqi.kr/mall/";
    })
    framebtn3.addEventListener("click", function () {
        iframe.classList.remove("active");
        iframe.src = "http://xn--4y2bj8lbmfh3hz2i.com/";
    })
    framebtn5.addEventListener("click", function () {
        iframe.classList.remove("active");
        iframe.src = "http://xn--om2b562bixd85a.kr/";
    })
    campbtn.forEach(function (ele) {
        ele.classList.remove("active"); // 현재 요소의 "active" 클래스 제거

        ele.addEventListener("click", function () {
            campbtn.forEach(function (btn) {
                btn.classList.remove("active"); // 모든 요소의 "active" 클래스 제거
            });

            ele.classList.add("active");
            tutle.classList.add("move2") // 클릭된 요소에 "active" 클래스 추가
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    capmbtns();
});