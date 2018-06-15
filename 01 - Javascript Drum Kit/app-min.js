"use strict";function playSound(e){var n=document.querySelector('audio[data-key="'+e+'"]');n&&(n.currentTime=0,n.play())}function animateKey(e){e&&e.classList.add("pop")}function removeTransition(e){"transform"===e.propertyName&&this.classList.remove("pop")}window.addEventListener("keydown",function(e){var n=document.querySelector('.key[data-key="'+e.keyCode+'"]');playSound(e.keyCode),animateKey(n)});var drumKeys=document.querySelectorAll(".key");drumKeys.forEach(function(e){return e.addEventListener("click",function(n){animateKey(e),playSound(e.dataset.key)})}),drumKeys.forEach(function(e){return e.addEventListener("transitionend",removeTransition)});