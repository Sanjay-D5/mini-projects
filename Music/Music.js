let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlItem = document.getElementById("ctrlItem");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (ctrlItem.classList.contains("fa-pause")) {
        song.pause();
        ctrlItem.classList.remove("fa-pause");
        ctrlItem.classList.add("fa-play");
    } else {
        song.play();
        ctrlItem.classList.add("fa-pause");
        ctrlItem.classList.remove("fa-play");
    }
}
// when song plays control should also move along with it
if (song.play()) {  
    setInterval(() => {
        progress.value = song.currentTime; 
    }, 500);
}
// if we move the cursur it should play from that point
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlItem.classList.add("fa-pause");
    ctrlItem.classList.remove("fa-play");
};
