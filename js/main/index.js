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
// 이미지 맵부분
// 이미지 맵부분
// 이미지 맵부분
function imgmap() {
    const maparea = document.querySelectorAll("area");
    const mapnamedata = document.querySelector(".img-page-title > h1");
    const mapimgdata = document.querySelector(".img-page-img > img");
    const maplinkdata = document.querySelector(".img-page-link > a");
    const maplinkspan = document.querySelector(".img-page-link > span");

    maparea[0].addEventListener("click", function () {
        mapnamedata.innerText = "병지방 캠핑장";
        mapimgdata.src = "./imgs/main/map/1.png";
        maplinkdata.classList.remove("map-active");
        maplinkspan.classList.remove("span-active");
    })
    maparea[1].addEventListener("click", function () {
        mapnamedata.innerText = "수원 KT위즈파크";
        mapimgdata.src = "./imgs/main/map/2.jpg";
        maplinkdata.classList.add("map-active");
        maplinkspan.classList.add("span-active");
    })
    maparea[2].addEventListener("click", function () {
        mapnamedata.innerText = "어은돌 송림캠핑장";
        mapimgdata.src = "./imgs/main/map/3.jpg";
        maplinkdata.href = `http://xn--4y2bj8lbmfh3hz2i.com/`;
        maplinkdata.classList.remove("map-active");
        maplinkspan.classList.remove("span-active");
    })
    maparea[3].addEventListener("click", function () {
        mapnamedata.innerText = "칠곡보 오토캠핑장";
        mapimgdata.src = "./imgs/main/map/4.jpg";
        maplinkdata.href = `https://camp.xticket.kr/web/main?shopEncode=3b8dfd4fe83ef398626319d169929b5df473aafca57da427af869db901ce8b86`;
        maplinkdata.classList.remove("map-active");
        maplinkspan.classList.remove("span-active");
    })
    maparea[4].addEventListener("click", function () {
        mapnamedata.innerText = "양산 캠프포레";
        mapimgdata.src = "./imgs/main/map/5.jpg";
        maplinkdata.href = `https://www.kidslandcamping.co.kr/page/ground.php?campSeq=13`;
        maplinkdata.classList.remove("map-active");
        maplinkspan.classList.remove("span-active");
    })
    maparea[5].addEventListener("click", function () {
        mapnamedata.innerText = "담양 금성산성 오토캠핑장";
        mapimgdata.src = "./imgs/main/map/6.jpg";
        maplinkdata.classList.add("map-active");
        maplinkspan.classList.add("span-active");
    })
}
//헤더 드롭다운
//헤더 드롭다운
//헤더 드롭다운
function dropdownheader() {
    const mainmenu = document.querySelectorAll(".main-menu");
    const submemu = document.querySelectorAll(".sub-menu");
    const menuframe = document.querySelector(".nav-drop");
    const header = document.querySelector("header");

    header.addEventListener("mouseover", function () {
        menuframe.classList.add("slide-down")
        submemu.forEach(function (ele) {
            ele.classList.add("display")
        })
    });
    header.addEventListener("mouseleave", function () {
        menuframe.classList.remove("slide-down")
        submemu.forEach(function (ele) {
            ele.classList.remove("display")
        })
    });

}
//top 버튼
//top 버튼
//top 버튼
function topicon() {
    const topbtn = document.querySelector(".top-icon");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            topbtn.classList.add("topbtn-on");
        } else {
            topbtn.classList.remove("topbtn-on");
        }
    });
    topbtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// 모바일 스와이퍼부분
// 모바일 스와이퍼부분
// 모바일 스와이퍼부분
function mbmap() {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mbmap-swap", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        }
    });
}
//푸터 슬라이더 버튼
//푸터 슬라이더 버튼
//푸터 슬라이더 버튼
function footermap() {
    const footermap = document.querySelectorAll(".footer-map");
    const mobilesec = document.querySelector("#mobile-sec");
    const mobilecontent = document.querySelector("#mobile-sec > .mbmap-swap > .swiper-wrapper >.swiper-slide");
    const mbmapswap = new Swiper(".mbmap-swap", { // Swiper 슬라이더 초기화
        // Swiper 설정 옵션들을 여기에 추가
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        }
    });
    footermap.forEach(function (ele, index) {
        ele.addEventListener("click", function (e) {
            e.preventDefault();
            mbmapswap.slideTo(index);
            mobilesec.scrollIntoView({
                behavior: "smooth"
            });
        })
    })
}

function headerload() {
    fetch('./html/common/header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.querySelector('header'); // 삽입할 위치의 요소 선택
            headerContainer.innerHTML = data; // 헤더 HTML을 삽입할 위치에 추가
            dropdownheader();
        });

}
function footerload() {
    fetch('./html/common/footer.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.querySelector('footer'); // 삽입할 위치의 요소 선택
            headerContainer.innerHTML = data; // 헤더 HTML을 삽입할 위치에 추가
            footermap();
        });
}
// DOM이 로드되면 실행될 함수들을 이벤트 리스너로 등록
document.addEventListener('DOMContentLoaded', function () {
    // 팝업부분
    popclose();
    mp3player();
    popuptoggle();
    minimize();
    //배너스와이퍼 부분
    bannerswap();
    // 이미지 맵부분
    // 이미지 맵부분
    imgmap();
    //헤더 드롭다운
    //헤더 드롭다운
    //탑버튼
    //탑버튼
    //탑버튼
    topicon();
    //모바일 맵 부분
    //모바일 맵 부분
    //모바일 맵 부분
    mbmap();
    //푸터 슬라이더 버튼
    //푸터 슬라이더 버튼
    //푸터 슬라이더 버튼
    footermap();
    headerload();
    footerload();
});
