document.addEventListener('DOMContentLoaded', function () {
    const wrap = document.getElementsByClassName('slide-wrap')[0];
    const next = document.getElementsByClassName('sec2-sl-next')[0];
    const prev = document.getElementsByClassName('sec2-sl-prev')[0];
    const bulletsContainer = document.getElementsByClassName('sec2-sl-bullet')[0];
    const bullets = bulletsContainer.getElementsByTagName('button');

    let slidenum = 0;

    // 슬라이드 개수에 따라 bullets 배열 길이 설정
    const slideCount = bullets.length;
    bulletsContainer.style.display = slideCount > 1 ? 'block' : 'none';

    // Next 버튼 클릭 이벤트 리스너
    next.addEventListener('click', function () {
        slidenum += 100;

        if (slidenum >= slideCount * 100) {
            slidenum = 0; // 슬라이드 루프
        }

        wrap.style.transform = 'translateX(-' + slidenum + '%)';
        prev.disabled = false;
        next.disabled = false;
        wrap.classList.add('slide-active');
        updateBulletActive();
    });

    // Prev 버튼 클릭 이벤트 리스너
    prev.addEventListener('click', function () {
        slidenum -= 100;

        if (slidenum < 0) {
            slidenum = (slideCount - 1) * 100; // 슬라이드 루프
        }

        wrap.style.transform = 'translateX(-' + slidenum + '%)';
        prev.disabled = false;
        next.disabled = false;
        wrap.classList.add('slide-active');
        updateBulletActive();
    });

    // 각 버튼 클릭 이벤트 리스너
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].addEventListener('click', function () {
            const slideIndex = i;
            const slidePosition = -slideIndex * 100 + '%';
            wrap.style.transform = 'translateX(' + slidePosition + ')';
            slidenum = slideIndex * 100;
            updateBulletActive();
            prev.disabled = slideIndex === 0;
            next.disabled = slideIndex === slideCount - 1;
            wrap.classList.add('slide-active');
        });
    }

    // 초기값 설정
    updateBulletActive();

    // 현재 활성화된 버튼 업데이트 함수
    function updateBulletActive() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].classList.toggle('active', i * 100 === slidenum);
        }
    }
});