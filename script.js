const theHour = document.getElementById("hours");
const theMinute = document.getElementById("minutes");
const theSecond = document.getElementById("seconds");

const clock = setInterval(function time () {
let todayDate = new Date();
let hr = todayDate.getHours();
let min = todayDate.getMinutes();
let sec = todayDate.getSeconds( );
  
 if (hr < 10) {
   hr ='0'  + hr;
 }

 if (min < 10) {
   min ='0'  + min;
 }

 if (sec < 10) {
   sec ='0'  + sec;
 }

 theHour.textContent = hr;
 theMinute.textContent = min;
 theSecond.textContent = sec;
 }, 1000);


