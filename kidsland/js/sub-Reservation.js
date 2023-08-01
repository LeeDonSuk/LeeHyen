const playcheck = document.querySelectorAll('.checkin > ul > li');
const campingcheck = document.querySelectorAll('.camping-list > ul > li');
const checkbox = document.querySelectorAll('.Agree-inner > div > input');
const inputbox = document.querySelectorAll('.inputes > input');
const clearbtn = document.querySelector('.play-btn > button')
const allcheck = checkbox[0];

function updatePlayCheck() {
  const hasActiveCamping = Array.from(campingcheck).some((ele) => ele.classList.contains('active'));
  const hasValueInAllInputs = Array.from(inputbox).every((input) => input.value.trim() !== '');

  playcheck[0].classList.toggle('active', !hasActiveCamping);
  playcheck[1].classList.toggle('active', hasActiveCamping && !hasValueInAllInputs);
  playcheck[2].classList.toggle('active', hasValueInAllInputs);
}

campingcheck.forEach((ele) => {
  ele.addEventListener('click', () => {
    ele.classList.toggle('active');
    campingcheck.forEach((otherEle) => {
      if (otherEle !== ele) {
        otherEle.classList.remove('active');
      }
    });
    updatePlayCheck();
  });
});

inputbox.forEach((input) => {
  input.addEventListener('input', updatePlayCheck);
});

allcheck.addEventListener('change', () => {
  const isChecked = allcheck.checked;
  checkbox.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
  updatePlayCheck();
});

// 초기화면 설정
campingcheck.forEach((ele) => {
  ele.classList.remove('active');
});
updatePlayCheck();

clearbtn.addEventListener('click', () => {
  if (playcheck[2].classList.contains('active')) {
    alert('예약완료되셨습니다.');
  }
});