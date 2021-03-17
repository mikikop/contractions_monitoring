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
    if (count == 11){
        location.reload();
    }
    
}

function stop(){
    timeTab.push(elapsedTime);
    clearInterval(timerInterval);
    print("OO:00:00");
    showButton("PLAY");
    item4 = document.querySelector(".item4")
    let item41 = document.createElement("div");
    let lanterne = document.createElement("div");
    let label = document.createElement("div");
    item41.classList.add("div41")
    lanterne.classList.add("lanterne");
    label.classList.add("label");
    console.log(lanterne);
    let stopTime = timeToString(elapsedTime);
    label.innerHTML = stopTime;
    item4.appendChild(item41);
    item41.appendChild(lanterne);
    item41.appendChild(label)
    lanterne.innerHTML = count;
    // lanterne.appendChild(label);
    count = count+1;
    if (count == 11) {
        let avg = timeToString(averageTime(timeTab));
        avg_div = document.getElementById("display_avg");
        avg_div.innerHTML = avg
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
    //let lanternes = document.getElementById("lanternes");
}


let playButton = document.getElementById("playButton")
let stopButton = document.getElementById("stopButton")

playButton.addEventListener("click",start);
stopButton.addEventListener("click",stop);