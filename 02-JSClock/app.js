// app.js

// console.log(today);
// let today = new Date()
// setInterval(function() {

//   console.log(today.getTime);
// }, 1000)
const handSeconds = document.querySelector(".hand.seconds");
const handMinutes = document.querySelector(".hand.minutes");
const handHours = document.querySelector(".hand.hours");
// console.log(handSeconds)


let seconds = new Date().getSeconds()

function setDate(){
  const currentTime = new Date();
  
  handSeconds.style.transform = `rotate(${((seconds/60)*360)+90}deg)`;
  seconds++;

  // Minutes
  const minutes = currentTime.getMinutes()
  handMinutes.style.transform = `rotate(${((minutes/60)*360)-90}deg)`;

  const hours = currentTime.getHours();
  handHours.style.transform = `rotate(${((hours/12)*360)-90}deg)`;
  
}

setInterval(setDate, 1000)