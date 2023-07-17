const audio = new Audio('https://www.kidslandcamping.co.kr/data/camping_song.mp3');
const play = document.getElementById("play");
const pause = document.getElementById("pause");


play.onclick = function () {
    audio.play();
}


pause.onclick = function () {
    audio.pause();
}
