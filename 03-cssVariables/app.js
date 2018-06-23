const slider = document.querySelector("input");
slider.value = -256;

function changeBg() {
  let bgHex = Math.abs(slider.value);
  let txHex = Math.abs(parseInt(slider.value) + 256 );
  let bgColor = `rgba(${bgHex}, ${bgHex}, ${bgHex})`
  let txColor = `rgba(${txHex}, ${txHex}, ${txHex})`

  console.log(slider.value, bgHex, txHex);
  document.documentElement.style.setProperty(`--bgColor`, bgColor)
  document.documentElement.style.setProperty(`--txColor`, txColor)
}


slider.addEventListener("change", changeBg)
