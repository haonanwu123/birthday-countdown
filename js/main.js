const timeLeft = document.getElementById("time-left");
const birthday = new Date("09/27/2021")
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;//milliseconds
let timerId


function countDown() {
    const today = new Date();
    const timeSpan = birthday - today;
    console.log(timeSpan);
    if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy birthday!!!";
        clearInterval(timerId);
    }
}

timerId = setInterval(countDown,second);