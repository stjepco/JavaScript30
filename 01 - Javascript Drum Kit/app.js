// app.js

// function kojiAudio(key) {
//     const audio = document.querySelector(`audio[data-key="${key}"]`);
// }

function playSound(dataKey) {
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    // console.log(broj, audio);
    if (!audio) return; // Stop the function from running
    audio.currentTime = 0; // Revinde tostart
    audio.play();
}



window.addEventListener("keydown", function(key) {
    const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    // console.log(el)
    // console.log(audio)
    if (!audio) return; // Stop the function from running
    audio.currentTime = 0; // Revinde tostart
    audio.play();
})

// Play sound when clicking
const drumKeys = document.querySelectorAll(".key")
drumKeys.forEach(key => key.addEventListener("click", function(event) {
    // console.log("Radi", key);
    // const presedKey
    // const broj = key.dataset.key
    // console.log(broj);
    playSound(key.dataset.key);

    // key.classList.toggle("test")
    // console.log("this", key)
    // const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    // audio.play();
    // console.log(audioElement)
}))

