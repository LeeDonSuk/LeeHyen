function loadPageContent(page) {
    fetch('../../sub-page/data/campin.json')
        .then(response => response.json())
        .then(jsonData => {

            let content;

            switch (page) {
                case 1:
                    content =
                        `
                    <div class="section">
            
                    <div class="section-title">
                        <div class="section-title-img">
                            <img src="${jsonData["병지방"][1]["이미지"]["sec1-img"]}">
                        </div>
            
                        <div class="section-title-textbox">
                            <div class="textbox-title">
                                <div class="textbox-title-icon">
                                    <img src="${jsonData["공통이미지"][0]["title-icon"]}">
                                </div>
                                <h2>${jsonData["병지방"][0]["섹션제목"]["section1-title"]}</h2>
                            </div>
            
                            <div class="textbox-lolem">
                                <p>${jsonData["병지방"][0]["섹션제목"]["section1-text1"]}</p>
                                <p>${jsonData["병지방"][0]["섹션제목"]["section1-text2"]}</p>
                            </div>
            
                            <div class="textbox-btn">
                                <a href="./Reservation.html">
                                    <button>예약하기</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="section2-detail">
                        <img src="${jsonData["공통이미지"][0]["detail"]}">
                    </div>
                    <div class="section2-title">
                        <h2>캠핑장 <span>미리보기</span></h2>
                    </div>
                    <!-- swiper -->
                    <div class="swiper mySwiper campingswiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide Slide1back">Slide 1</div>
                            <div class="swiper-slide Slide2back">Slide 2</div>
                            <div class="swiper-slide Slide3back">Slide 3</div>
                            <div class="swiper-slide Slide4back">Slide 4</div>
                            <div class="swiper-slide Slide5back">Slide 5</div>
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
                        <script>
                var swiper = new Swiper(".campingswiper", {
                    spaceBetween: '30', // 따옴표로 감싸야 함
                    centeredSlides: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
                        </script>
                    </div>
                </div>
                <div class="section">
                    <div class="section3-title">
                        <h2>캠핑장 위치</h2>
                    </div>
                    <div class="section3-box">
                        <div class="section3-icon">
                            <img src="${jsonData["공통이미지"][0]["map-icon"]}">
                        </div>
                        <div class="section3-text">
                            <h2>병지방 오토 캠핑장</h2>
                            <p>${jsonData["병지방"][3]["섹션3내용"]["address"]}</p>
                            <p>
                                <span><img src="${jsonData["공통이미지"][0]["tell-icon"]}"></span>
                                ${jsonData["병지방"][3]["섹션3내용"]["tell"]}
                            </p>
                            <p>${jsonData["병지방"][3]["섹션3내용"]["phone"]}</p>
                        </div>
                    </div>
                    <div class="section-page-link">
                        <a href="${jsonData["병지방"][4]["링크"]}">
                        ${jsonData["병지방"][0]["섹션제목"]["section1-title"]} <span> 홈페이지</span>
                        </a>
                    </div>
                </div>
                    `
                        ;
                    break;
                case 2:
                    content = `
                        <div class="section">
                            <!-- 페이지 2의 내용을 여기에 작성 -->
                        </div>
                    `;
                    break;
                case 3:
                    content = `
                        <div class="section">
                            <!-- 페이지 3의 내용을 여기에 작성 -->
                        </div>
                    `;
                    break;
                // 다른 페이지에 대한 case도 추가하세요
                default:
                    content = "<p>이 페이지에 대한 내용이 없습니다.</p>";
                    break;
            }

            // contentDiv에 선택한 페이지의 내용을 업데이트
            var contentDiv = document.getElementById('campingmain');
            contentDiv.innerHTML = content;

            // 슬라이드 자동 재생
            var swiper = new Swiper(".campingswiper", {
                spaceBetween: '30',
                centeredSlides: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        })

        .catch(error => console.error('오류:', error));

}


window.onload = function () {
    loadPageContent(1); // 기본적으로 페이지 1의 내용을 로드
}

// 각 버튼에 이벤트 리스너 추가
document.getElementById('map1').addEventListener('click', function () {
    loadPageContent(1);
});
document.getElementById('map2').addEventListener('click', function () {
    loadPageContent(2);
});
document.getElementById('map3').addEventListener('click', function () {
    loadPageContent(3);
});

document.getElementById('map4').addEventListener('click', function () {
    loadPageContent(4);
});

document.getElementById('map5').addEventListener('click', function () {
    loadPageContent(5);
});
document.getElementById('map6').addEventListener('click', function () {
    loadPageContent(6);
});