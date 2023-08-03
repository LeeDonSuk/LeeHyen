const secbtn = document.querySelector('.sec-btn > button');
const secinfo = document.querySelectorAll('.sec-info input');

// 정규식 패턴
const idPattern = /^[a-zA-Z0-9]{6,12}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const namePattern = /^[가-힣]{2,6}$/;
const phonePattern = /^\d{3}-\d{3,4}-\d{4}$/;
const carPattern = /^\d{4}$/;

secbtn.addEventListener('click', function () {
    const idValue = secinfo[0].value.trim();
    const passwordValue = secinfo[1].value.trim();
    const nameValue = secinfo[2].value.trim();
    const phoneValue = secinfo[3].value.trim();
    const carNumberValue = secinfo[4].value.trim();

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

    if (!carPattern.test(carNumberValue)) {
        alert('차량번호를 형식에 맞게 입력해주세요. (숫자 4자리)');
        return;
    }

    const reservationInfo = JSON.parse(localStorage.getItem('reservationInfo'));

            if (reservationInfo) {
                const { id, user_name, phone_number, car_number } = reservationInfo;

                // 팝업창에 정보 채우기
                const popupId = document.getElementById('popup-id');
                const popupName = document.getElementById('popup-name');
                const popupPhone = document.getElementById('popup-phone');
                const popupCar = document.getElementById('popup-car');

                popupId.textContent = id;
                popupName.textContent = user_name;
                popupPhone.textContent = phone_number;
                popupCar.textContent = car_number;

                // 팝업창 열기
                const popupWindow = window.open('', '_blank', 'width=400,height=300');
                popupWindow.document.open();
                popupWindow.document.write('<html><head><title>예약 정보 확인</title>');
                popupWindow.document.write('<link rel="icon" href="../kidsland/imgs/favicon/favicon.ico" type="image/x-icon">');
                popupWindow.document.write('<link rel="stylesheet" href="../kidsland/css/index.css">');
                popupWindow.document.write('<link rel="stylesheet" href="./css/sub.css">');
                popupWindow.document.write('</head><body>');
                // 헤더 추가
                popupWindow.document.write('<header><h1>키즈랜드 캠핑!</h1></header>');
                popupWindow.document.write(document.getElementById('popup-container').innerHTML);
                popupWindow.document.write('</body></html>');
                popupWindow.document.close();
            } else {
                alert('없는 예약정보 입니다.');
            }
        });