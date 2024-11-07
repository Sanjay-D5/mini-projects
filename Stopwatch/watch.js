let displayData = document.getElementById('display-date');

let [hours , minutes , seconds] = [0,0,0];

let timer = null;

function start(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    } 
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    displayData.innerHTML = h + ':' + m + ':' + s;
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer = setInterval(start,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchRestart(){
    clearInterval(timer);
    [hours , minutes , seconds] = [0,0,0];
    displayData.innerHTML = "00:00:00";
}