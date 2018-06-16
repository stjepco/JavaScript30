// app.js

function playSound(dataKey) {
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    if (!audio) return; // Stop the function from running
    audio.currentTime = 0; // Rewind to start
    audio.play();
}

function animateKey(key) {
    if (!key) return; // Stop function if an unwanted key is pressed/clicked
    key.classList.add("pop")
}
function removeTransition(event) {
    if (event.propertyName !== "transform") return; // skip if it is not transform TransitionEvent
    this.classList.remove("pop")
}

// Play sonds on key press
window.addEventListener("keydown", function(key) {
    const keyButton = document.querySelector(`.key[data-key="${key.keyCode}"]`);
    playSound(key.keyCode);
    animateKey(keyButton);
})

// Play sound when clicking
const drumKeys = document.querySelectorAll(".key")
drumKeys.forEach(key => key.addEventListener("click", function(event) {
    animateKey(key);
    playSound(key.dataset.key);
}))

drumKeys.forEach(key => key.addEventListener("transitionend", removeTransition))
