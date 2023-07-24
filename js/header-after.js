const dropdownItems = document.querySelectorAll(".dropdown-items > a");
localStorage.removeItem("clickedItem");


// 각 .dropdown-items에 대해 이벤트 리스너를 추가하는 함수
function addClickListeners() {
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
}

// 각 .dropdown-items에 대한 이벤트 리스너 등록
addClickListeners();

// DOM이 로드될 때 실행되는 함수
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

// index.html 페이지에서 로컬 스토리지 삭제
clearClassFromLocalStorageIfIndexPage();

window.addEventListener("beforeunload", clearClassFromLocalStorageIfIndexPage);

applyClassFromLocalStorage();