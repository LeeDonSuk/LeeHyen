const Goods1 = document.querySelector('.event-box1');
const Goods2 = document.querySelector('.event-box2');
const eventhover = document.querySelectorAll('.hover-box');

console.log(eventhover[0])

Goods1.addEventListener('mouseover', () => {
    eventhover[0].classList.add('active');
})
Goods1.addEventListener('mouseout', () => {
    // eventhover[0] 요소에서 active 클래스를 제거하여 원래 스타일로 변경
    eventhover[0].classList.remove('active');
});

Goods2.addEventListener('mouseover', () => {
    eventhover[1].classList.add('active');
})
Goods2.addEventListener('mouseout', () => {
    // eventhover[0] 요소에서 active 클래스를 제거하여 원래 스타일로 변경
    eventhover[1].classList.remove('active');
});