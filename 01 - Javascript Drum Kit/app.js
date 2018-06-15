// app.js

function playSound(dataKey) {
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    if (!audio) return; // Stop the function from running
    audio.currentTime = 0; // Revinde tostart
    audio.play();
}

// Play sonds on key press
window.addEventListener("keydown", function(key) {
    const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    playSound(key.keyCode);
})

// Play sound when clicking
const drumKeys = document.querySelectorAll(".key")
drumKeys.forEach(key => key.addEventListener("click", function(event) {
    playSound(key.dataset.key);
}))

