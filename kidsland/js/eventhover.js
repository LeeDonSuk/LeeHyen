const Goods1 = document.querySelector('.box-event1');
const Goods2 = document.querySelector('.box-event2');
const eventhover = document.querySelector('.hover-box1');
const eventhover2 = document.querySelector('.hover-box2');

Goods1.addEventListener('mouseover', () =>{
    eventhover.classList.add('active');
});
Goods1.addEventListener('mouseout', () =>{
    eventhover.classList.remove('active');
});
Goods2.addEventListener('mouseover', () =>{
    eventhover2.classList.add('active');
});
Goods2.addEventListener('mouseout', () =>{
    eventhover2.classList.remove('active');
});