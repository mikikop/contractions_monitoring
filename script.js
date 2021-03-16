let startTime;
let elapsedTime = 0;
let timerInterval;
let count = 1;
let timeTab = [];

function timeToString(time){
    let hours = time/3600000;
    let hh = Math.floor(hours);

    let minutes = (hours - hh)*60;
    let mm = Math.floor(minutes);

    let seconds = (minutes - mm)*60;
    let ss = Math.floor(seconds);

    let millisec = (seconds - ss)*100;
    let ms = Math.floor(millisec);

    let formattedH = hh.toString().padStart(2,"0");
    let formattedM = mm.toString().padStart(2,"0");
    let formattedS = ss.toString().padStart(2,"0");
    let formattedMs = ms.toString().padStart(2,"0");

    return `${formattedM}:${formattedS}:${formattedMs}`;
}

function print (text){
    document.getElementById("display").innerHTML = text;
}

function start(){
    startTime = Date.now();
    timerInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    
    showButton("STOP");
}

function stop(){
    timeTab.push(elapsedTime);
    console.log(timeTab)
    clearInterval(timerInterval);
    print("OO:00:00");
    showButton("PLAY");
    let lanterne = document.createElement("div");
    let counter = document.createElement("span");
    let label = document.createElement("span");
    lanterne.classList.add("lanterne");
    let stopTime = timeToString(elapsedTime);
    label.innerHTML = stopTime;
    lanterne.append(count);
    lanternes.append(lanterne);
    lanternes.append(label);
    count = count+1;
    if (count == 11) {
        let avg = averageTime(timeTab);
        let avgerageLabel = document.createElement("div");
        lanternes.append(avgerageLabel)
        console.log(timeToString(avg));
    }
    elapsedTime = 0;
}

function averageTime(timeTab) {
    let total = 0;
    for (const key in timeTab) {
        total += timeTab[key];
    }
    return total/timeTab.length;
}


function showButton(buttonKey) {
    event.preventDefault();
    const buttonToShow = buttonKey === "PLAY" ? playButton : stopButton;
    const buttonToHide = buttonKey === "PLAY" ? stopButton : playButton;
    buttonToHide.style.display = "none";
    buttonToShow.style.display = "block";
    let lanternes = document.getElementById("lanternes");
}


let playButton = document.getElementById("playButton")
let stopButton = document.getElementById("stopButton")

playButton.addEventListener("click",start);
stopButton.addEventListener("click",stop);