// app.js

window.addEventListener("keydown", function(el) {
    const audio = document.querySelector(`audio[data-key="${el.keyCode}"]`);
    if (!audio) return; // Stop the function from running
    audio.currentTime = 0; // Revinde tostart
    audio.play();
})
