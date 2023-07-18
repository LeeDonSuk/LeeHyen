const dropdownItems = document.querySelectorAll(".dropdown-items > a");
const dropdownsub = document.querySelectorAll(".dropdown-items > ul > li > a");


window.addEventListener("DOMContentLoaded", applyClassFromLocalStorage);

// 각 .dropdown-items에 대해 이벤트 리스너를 추가
dropdownItems.forEach(function (ele) {
    ele.addEventListener("click", function () {
        // 현재 클릭된 버튼에 클래스를 추가하고, 다른 버튼에 있는 클래스는 제거
        dropdownItems.forEach(function (btn) {
            if (btn === ele) {
                btn.classList.add("clicked");
                // 로컬 스토리지에 클래스 정보 저장
                localStorage.setItem("clickedItem", btn.innerText);
            } else {
                btn.classList.remove("clicked");
            }
        });
    });
});


function applyClassFromLocalStorage() {
    const clickedItem = localStorage.getItem("clickedItem");
    dropdownItems.forEach(function (button) {
        if (button.innerText === clickedItem) {
            button.classList.add("clicked");
        } else {
            button.classList.remove("clicked");
        }
    });
}

function clearClassFromLocalStorageIfIndexPage() {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        localStorage.removeItem("clickedItem");
    }
}

// 새로고침 이벤트 발생 시 클래스 정보 초기화 (인덱스 페이지만 적용)
window.addEventListener("beforeunload", clearClassFromLocalStorageIfIndexPage);

applyClassFromLocalStorage();

dropdownsub.forEach(ele => {
    console.log(ele);
    ele.addEventListener('mouseover', function () {
        ele.classList.add('mouseover');
    });

    ele.addEventListener('mouseout', function () {
        ele.classList.remove('mouseover');
    });
});
