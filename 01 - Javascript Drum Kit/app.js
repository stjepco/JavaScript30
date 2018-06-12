// app.js

function getKey(e) {
    return document.querySelector(`audio[data-key="${e.keyCode}"]`);
}

window.addEventListener("keydown", function(e) {
    const audio  = getKey(e);
    console.log(audio);
    if(!audio) return; // stop the function from running
    audio.play();
})