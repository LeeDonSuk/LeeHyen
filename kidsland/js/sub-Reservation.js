const elstatus = document.querySelector('.status');
const ellist = document.querySelectorAll('.camping-list > ul > li');
const checklist = document.querySelectorAll('.checklist');
const infoinpt = document.querySelectorAll('.box-container input');
const allcheck = document.querySelector('.allcheck');
const checkitems = document.querySelectorAll('.checkboxitems');
const clearbtn = document.querySelector('.play-btn > button');


// 스크롤 이벤트 처리
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY; // 현재 스크롤 위치 가져오기
  elstatus.style.top = scrollY + 'px'; // 요소의 top 위치를 스크롤 위치에 따라 조정
});

// 체크박스 초기 비활성화
allcheck.disabled = true;
checkitems.forEach((item) => (item.disabled = true));

// 각 항목을 클릭했을 때 active 클래스 토글
ellist.forEach(function (item) {
  item.addEventListener('click', function () {
    ellist.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    item.classList.toggle('active');

    const firstChecklist = checklist[0];
    if (item.classList.contains('active')) {
      firstChecklist.classList.add('active');
    } else {
      firstChecklist.classList.remove('active');
    }

    // checklist[2]에 active 클래스가 있을 때만 allcheck와 checkitems 활성화
    if (checklist[2].classList.contains('active')) {
      allcheck.disabled = false;
      checkitems.forEach((item) => (item.disabled = false));
    } else {
      allcheck.checked = false; // allcheck 초기화
      allcheck.disabled = true;
      checkitems.forEach((item) => {
        item.checked = false;
        item.disabled = true;
      });
    }
  });
});

// 입력란의 값이 변경될 때마다 체크리스트 업데이트
function updateChecklist() {
  const hasValueInAllInputs = Array.from(infoinpt).every((input) => input.value.trim() !== '');
  const hasValueInAnyInput = Array.from(infoinpt).some((input) => input.value.trim() !== '');

  // ellist가 선택되지 않았고, infoinpt에 값 입력시 경고창 띄우고 값 지우기
  if (!document.querySelector('.camping-list > ul > li.active')) {
    if (hasValueInAnyInput) {
      alert('캠핑장을 선택 해주세요');
      infoinpt.forEach((input) => (input.value = '')); // 입력된 값 지우기
      checklist[1].classList.remove('active'); // checklist[1]의 active 클래스 제거
      allcheck.checked = false; // allcheck 초기화
      allcheck.disabled = true; // allcheck 비활성화
      checkitems.forEach((item) => {
        item.checked = false;
        item.disabled = true;
      });
    }
    return; // 함수 종료
  }

  // 입력란에 값이 하나 이상 있을 때, checklist[1]에 active 클래스 추가
  if (hasValueInAnyInput) {
    checklist[0].classList.remove('active');
    checklist[1].classList.add('active');
  } else {
    checklist[1].classList.remove('active');
    checklist[0].classList.add('active');
  }

  // 모든 입력란에 값이 있을 때, checklist[2]에 active 클래스 추가
  if (hasValueInAllInputs) {
    checklist[1].classList.remove('active');
    checklist[2].classList.add('active');

    // checklist[2]에 active 클래스가 있을 때만 allcheck와 checkitems 활성화
    allcheck.disabled = false;
    checkitems.forEach((item) => (item.disabled = false));
  } else {
    checklist[2].classList.remove('active');

    // checklist[2]에 active 클래스가 없을 때 allcheck와 checkitems 비활성화
    allcheck.checked = false; // allcheck 초기화
    allcheck.disabled = true;
    checkitems.forEach((item) => {
      item.checked = false;
      item.disabled = true;
    });
  }

  // 모든 checkitems가 체크되었을 때 allcheck 체크
  const isCheckedAllCheckitems = Array.from(checkitems).every((item) => item.checked);
  allcheck.checked = isCheckedAllCheckitems && checklist[2].classList.contains('active');
}

// 각 입력란에 이벤트 리스너 추가
infoinpt.forEach(function (input) {
  input.addEventListener('input', updateChecklist);
});

// 전체 선택 체크박스(allcheck)의 이벤트 리스너 추가
allcheck.addEventListener('click', function () {
  if (checklist[2].classList.contains('active')) {
    const isChecked = allcheck.checked;
    checkitems.forEach((item) => (item.checked = isChecked));
  } else {
    allcheck.checked = false;
  }
});

// 각 아이템 체크박스(checkitems)의 이벤트 리스너 추가
checkitems.forEach((item) => {
  item.addEventListener('click', function () {
    const secondChecklist = checklist[1];

    // checklist[2]에 active 클래스가 있을 때만 체크 가능
    if (checklist[2].classList.contains('active') && secondChecklist.classList.contains('active') && this.checked) {
      alert('이전 단계를 먼저 진행해주세요.');
      this.checked = false;
    }
    updateChecklist();
  });
});

// 페이지 로드시
window.addEventListener('load', function () {
  updateChecklist();
});

// Clear Button (초기화 버튼) 이벤트 리스너 추가
clearbtn.addEventListener('click', function () {
  // 각 입력란에 대한 정규식 패턴
  const idPattern = /^[a-zA-Z0-9]{6,12}$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const namePattern = /^[가-힣]{2,6}$/;
  const phonePattern = /^\d{3}-\d{3,4}-\d{4}$/;
  const carNumberPattern = /^[가-힣]{2}\s\d{2,3}[가-힣]\s\d{4}$/;

  // 각 입력란에 대한 값 가져오기
  const idValue = infoinpt[0].value.trim();
  const passwordValue = infoinpt[1].value.trim();
  const nameValue = infoinpt[2].value.trim();
  const phoneValue = infoinpt[3].value.trim();
  const carNumberValue = infoinpt[4].value.trim();

  // 정규식 패턴 검사
  if (!idPattern.test(idValue)) {
    alert('아이디를 형식에 맞게 입력해주세요. (영문자와 숫자, 6~12자)');
    return;
  }

  if (!passwordPattern.test(passwordValue)) {
    alert('비밀번호를 형식에 맞게 입력해주세요. (영문자, 숫자, 8자 이상)');
    return;
  }

  if (!namePattern.test(nameValue)) {
    alert('이름을 형식에 맞게 입력해주세요. (한글, 2~6자)');
    return;
  }

  if (!phonePattern.test(phoneValue)) {
    alert('휴대폰 번호를 형식에 맞게 입력해주세요. (XXX-XXX-XXXX 또는 XXX-XXXX-XXXX)');
    return;
  }

  if (!carNumberPattern.test(carNumberValue)) {
    alert('차량 번호를 형식에 맞게 입력해주세요. (한글 2자, 숫자 2~3자, 한글 1자, 숫자 4자)');
    return;
  }

  // 입력란 초기화
  infoinpt.forEach((input) => (input.value = ''));

  // ellist와 checklist의 모든 'active' 클래스 제거
  ellist.forEach((item) => item.classList.remove('active'));
  checklist.forEach((item) => item.classList.remove('active'));

  // allcheck 비활성화 및 checkitems 초기화
  allcheck.checked = false;
  allcheck.disabled = true;
  checkitems.forEach((item) => {
    item.checked = false;
    item.disabled = true;
  });

  alert('예약이 완료되었습니다.');
});
