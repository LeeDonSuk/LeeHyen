// 팝업부분
// 팝업부분
// 팝업부분 ----------------------------------------------
function popuptoggle() {
    const picon = document.querySelector(".popup-icon");
    const pcontainer = document.querySelector(".popup-container");

    picon.addEventListener("click", function () {
        pcontainer.classList.remove("close");
        pcontainer.classList.toggle("active");
    });
}
function mp3player() {
    const playbtn = document.querySelector(".play-btn");
    const pausebtn = document.querySelector(".pause-btn");
    const video = document.querySelector("#campingsong");
    const playcircle = document.querySelector(".play-progress");

    playbtn.addEventListener("click", function () {
        video.play();
        playcircle.classList.add("active");
        playcircle.classList.remove("pause");
    });

    pausebtn.addEventListener("click", function () {
        video.pause();
        playcircle.classList.add("pause");
    });
}
function popclose() {
    const closebtn = document.querySelector(".close-btn");
    const pcontainer = document.querySelector(".popup-container");

    closebtn.addEventListener("click", function () {
        pcontainer.classList.add("close");
        pcontainer.classList.remove("active");
        pcontainer.classList.remove("minix");
        pcontainer.classList.remove("mini");

    });
}
function minimize() {
    const minibtn = document.querySelector(".minimize");
    const minix = document.querySelector(".dontmini");
    const pcontainer = document.querySelector(".popup-container");

    minibtn.addEventListener("click", function () {
        pcontainer.classList.remove("minix");
        pcontainer.classList.add("mini");
    })
    minix.addEventListener("click", function () {
        pcontainer.classList.remove("mini");
        pcontainer.classList.add("minix");
    })
}
// 스와이퍼 부분
// 스와이퍼 부분
// 스와이퍼 부분
// 스와이퍼 부분---------------------------------------
function bannerswap() {
    var swiper = new Swiper(".bannerswiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
    });
}

function imgmap() {
    const maparea = document.querySelectorAll("area");
    const mapnamedata = document.querySelector(".img-page-title > h1");
    const mapimgdata = document.querySelector(".img-page-img > img");
    const maplinkdata = document.querySelector(".img-page-link > a");

    console.log(
        maparea,
        mapnamedata,
        mapimgdata.src,
        maplinkdata.href
    )
    maparea[0].addEventListener("click", function () {
        mapnamedata.innerText = "병지방 캠핑장";
        mapimgdata.src = "./imgs/main/map/1.png";
        maplinkdata.classList.remove("map-active");
    })
    maparea[1].addEventListener("click", function () {
        mapnamedata.innerText = "수원 KT위즈파크";
        mapimgdata.src = "./imgs/main/map/2.jpg";
        maplinkdata.classList.add("map-active");
    })
    maparea[2].addEventListener("click", function () {
        mapnamedata.innerText = "어은돌 송림캠핑장";
        mapimgdata.src = "./imgs/main/map/3.jpg";
        maplinkdata.href = `http://xn--4y2bj8lbmfh3hz2i.com/`;
        maplinkdata.classList.remove("map-active");
    })
    maparea[3].addEventListener("click", function () {
        mapnamedata.innerText = "칠곡보 오토캠핑장";
        mapimgdata.src = "./imgs/main/map/4.jpg";
        maplinkdata.href = `https://camp.xticket.kr/web/main?shopEncode=3b8dfd4fe83ef398626319d169929b5df473aafca57da427af869db901ce8b86`;
        maplinkdata.classList.remove("map-active");
    })
    maparea[4].addEventListener("click", function () {
        mapnamedata.innerText = "양산 캠프포레";
        mapimgdata.src = "./imgs/main/map/5.jpg";
        maplinkdata.href = `https://www.kidslandcamping.co.kr/page/ground.php?campSeq=13`;
        maplinkdata.classList.remove("map-active");
    })
    maparea[5].addEventListener("click", function () {
        mapnamedata.innerText = "담양 금성산성 오토캠핑장";
        mapimgdata.src = "./imgs/main/map/6.jpg";
        maplinkdata.classList.add("map-active");
    })
}
imgmap();

// DOM이 로드되면 실행될 함수들을 이벤트 리스너로 등록
document.addEventListener('DOMContentLoaded', function () {
    // 팝업부분
    popclose();
    mp3player();
    popuptoggle();
    minimize();
    //배너스와이퍼 부분
    bannerswap();
});
