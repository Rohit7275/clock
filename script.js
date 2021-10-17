const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("Hours " + hour + " Minutes " + min + " Seconds " + sec);

let hourPosition = (hour*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {

    hourPosition = hourPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);
