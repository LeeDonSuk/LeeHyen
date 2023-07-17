const audio = new Audio('./mp3/camping_song.mp3');
const play = document.getElementById("play");
const pause = document.getElementById("pause");


play.onclick = function () {
    audio.play();
}


pause.onclick = function () {
    audio.pause();
}
