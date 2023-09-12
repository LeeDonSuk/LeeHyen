function kidslandbtn() {
    const kbtn1 = document.querySelector(".btn1");
    const kbtn2 = document.querySelector(".btn2");
    const kbtn3 = document.querySelector(".btn3");
    const changeimg = document.querySelector(".main-content-img > img");
    let changeimgsrc = changeimg.src;

    kbtn1.addEventListener("click", function () {
        changeimg.src = "http://127.0.0.1:5500/imgs/sub/kidsland/content/camping_con2023_01.jpg";
        kbtn1.classList.add("active");
        kbtn2.classList.remove("active");
        kbtn3.classList.remove("active");
    });
    kbtn2.addEventListener("click", function () {
        changeimg.src = "http://127.0.0.1:5500/imgs/sub/kidsland/content/camping_con2023_02.jpg";
        kbtn1.classList.remove("active");
        kbtn3.classList.remove("active");
        kbtn2.classList.add("active");
    });
    kbtn3.addEventListener("click", function () {
        kbtn3.classList.add("active")
        changeimg.src = "http://127.0.0.1:5500/imgs/sub/kidsland/content/camping_con2023_g07.jpg";
        kbtn1.classList.remove("active");
        kbtn2.classList.remove("active");
    });
    console.log(
        changeimgsrc
    );
}

//url("http://127.0.0.1:5500/imgs/sub/kidsland/btn/about_tab_01_off.png")
document.addEventListener('DOMContentLoaded', function () {
    kidslandbtn();
})