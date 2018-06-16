// app.js

// console.log(today);
// let today = new Date()
// setInterval(function() {

//   console.log(today.getTime);
// }, 1000)
const handSeconds = document.querySelector(".hand.seconds");
const handMinutes = document.querySelector(".hand.minutes");
// console.log(handSeconds)

function setDate(){
  const currentTime = new Date();
  const seconds = currentTime.getSeconds()
  handSeconds.style.transform = `rotate(${((seconds/60)*360)-90}deg)`;
  // handSeconds
  console.log(seconds);
}

setInterval(setDate, 1000)