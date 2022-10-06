const tipButton = document.getElementById("tip-of-the-day");
const main = document.getElementById("main");
localStorage.setItem("lastTipIndex", "-1");
const tips = ["Set Weekly Goals", "Schedule Everything", "Time Blocking", "Manage Distractions", "Plan Your Day", "Wake Up At The Same Time", "Don’t Rush in The Morning"];
tipButton.addEventListener("click", function () {
    const message = document.createElement("dialog");
    message.setAttribute("class", "text-of-tip");
    message.innerText = tips[getRandomNumberBetween(tips.length)];
    main.appendChild(message);
    message.show();
    setTimeout(() => {
        message.close();
        main.removeChild(message);
    }, 2000);
});

function getRandomNumberBetween(max){
    let randomNum = Math.floor(Math.random()*(max));
    if (randomNum === Number(localStorage.getItem("lastTipIndex"))){
        randomNum = getRandomNumberBetween(max);
    }
    localStorage.setItem("lastTipIndex", String(randomNum));
    return randomNum;
}

const xCoord = document.getElementById("x");
const yCoord = document.getElementById("y");
const keyCoord = document.getElementById("k");


field = document.getElementsByClassName("field")[0];
localStorage.setItem("key", "None");

field.addEventListener("mouseleave", function () {
    xCoord.innerText = "x coord: ";
    yCoord.innerText = "y coord: ";
    localStorage.setItem("x", "None");
    localStorage.setItem("y", "None");
});

document.body.addEventListener("keypress", function(evt) {
    keyCoord.innerText = "letter: "+ evt.key;
    localStorage.setItem("key", evt.key);
});

field.addEventListener("mousemove", function (evt) {
    let x = evt.pageX - field.getBoundingClientRect().left;
    let y = evt.pageY - field.getBoundingClientRect().top;
    localStorage.setItem("x", String(x));
    localStorage.setItem("y", String(y));
    xCoord.innerText = "x coord: " + x;
    yCoord.innerText = "y coord: " + y;
});

field.addEventListener("mousedown", function (evt) {
    if (localStorage.getItem("key") === "None") {
        alert("No letter was selected");
    }
    else {
        let letter = document.createElement("span");
        letter.innerText = localStorage.getItem("key");
        if (localStorage.getItem(x) === "None" || localStorage.getItem(y) === "None") {
            alert("No coord is selected");
        } else {
            letter.style.left = String(Number(localStorage.getItem("x")) + field.getBoundingClientRect().left)+"px";
            letter.style.top = String(Number(localStorage.getItem("y")) + field.getBoundingClientRect().top) + "px";
            field.appendChild(letter);
        }
    }
});