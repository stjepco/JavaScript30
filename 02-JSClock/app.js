// app.js

// Get handles
const handSeconds = document.querySelector(".hand.seconds");
const handMinutes = document.querySelector(".hand.minutes");
const handHours = document.querySelector(".hand.hours");
let timeSlider = document.querySelector("#timeSlider");
let secInterval = 1000;

// Get curent Date and time
const currentDay = new Date();
let seconds = currentDay.getSeconds();
let minutes = currentDay.getMinutes();
let hours = currentDay.getHours();

function rotateHandle(handle, deg) {
  handle.style.transform = `rotate(${deg}deg)`;
}

// Set starting positions
// So it sets it immediately
let degSeconds = ((seconds/60)*360)-90;
let degMinutes = (((minutes + (seconds/60))/60)*360)-90;
let degHours = (((hours + (minutes/60))/12)*360)-90;

rotateHandle(handSeconds, degSeconds)
rotateHandle(handMinutes, degMinutes)
rotateHandle(handHours, degHours)

function updateTime() {
  // Continue multiplying seconds for easyier transition
  // Function will fire after 1 second and update then increment second
  seconds++
  rotateHandle(handSeconds, ((seconds/60)*360)-90)
  rotateHandle(handMinutes, (((minutes + (seconds/60))/60)*360)-90)
  rotateHandle(handHours, (((hours + (minutes/60))/12)*360)-90)
}

let interval = setInterval(updateTime, secInterval)

function startInterval(secInterval){
  // clearInterval(interval);
  let interval = setInterval(updateTime, secInterval)
}

// console.log("sec",secInterval)


timeSlider.addEventListener("change", (event) => {
  console.log("slider", timeSlider.value)
    if(timeSlider.value === 0){
      clearInterval(interval);
      let interval = setInterval(updateTime, secInterval)

    } else if(timeSlider.value > 0) {
      // console.log("vece od nule", (1000*timeSlider.value))
      // setInterval(updateTime, (1000*timeSlider.value))
      // funkcije startInterval(secInterval)
      clearInterval(interval);
      startInterval(1000 * timeSlider.value)
      
    } else if (timeSlider.value < 0){
      // console.log("manje od nule", Math.abs((timeSlider.value*10)/1000))
      // setInterval(updateTime, Math.abs((timeSlider.value*10)/1000))
      // funkcije startInterval(secInterval)
      clearInterval(interval);
      startInterval(Math.abs((timeSlider.value*10)/1000))
    }
    
})

// setInterval(updateTime, secInterval)

// timeSlider.addEventListener("dblclick", (event) => console.log("duble", event))