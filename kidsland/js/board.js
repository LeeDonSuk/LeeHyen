const td = document.querySelectorAll('td');
const tp = document.querySelectorAll('.td-items');
let selectedTd = null;

td.forEach(function (ele) {
    ele.addEventListener('click', function () {
        if (selectedTd !== ele) {
            // 다른 td 요소를 클릭한 경우
            if (selectedTd) {
                // 이전에 선택된 td 요소가 있다면 'active' 클래스 제거
                selectedTd.classList.remove('active');
            }
            // 현재 td 요소에 'active' 클래스 추가
            ele.classList.add('active');
            // 선택된 요소 업데이트
            selectedTd = ele;
        } else {
            // 이미 선택된 td 요소를 클릭한 경우
            // 'active' 클래스 제거하고 선택된 요소 null로 초기화
            ele.classList.remove('active');
            selectedTd = null;
        }
    });
});
