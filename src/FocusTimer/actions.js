import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function play() {
  state.isRunning = true
  timer.countdown()
}

export function stop() {
  state.isRunning = false 
}

export function plus() {
  let minutes = Number(el.minutes.textContent);
  minutes += 5; 
  el.minutes.textContent = String(minutes).padStart(2, "0"); 
}

export function minus() {
  let minutes = Number(el.minutes.textContent)
  minutes -= 5
  el.minutes.textContent = String(minutes).padStart(2, "0"); 
}


export function florest(event) {
  if(state.isMute) {
    sounds.buttonFlorestAudio.pause()
  } else {
    sounds.buttonFlorestAudio.play()
  }
  state.isMute = !state.isMute 
 

  if (state.isButtonClicked) {
    el.buttonForest.style.backgroundColor = '#e0e0e5';
  } else {
    el.buttonForest.style.backgroundColor = '#5ab85a';
  }
  
  state.isButtonClicked = !state.isButtonClicked;
}

export function rain(event) {
  if(state.isMute) {
    sounds.buttonRainAudio.pause()
  } else {
    sounds.buttonRainAudio.play()
  }
  state.isMute = !state.isMute
 

  if (state.isButtonClicked) {
    el.buttonRain.style.backgroundColor = '#e0e0e5';
  } else {
    el.buttonRain.style.backgroundColor = '#0aa5d4';
  }
  
  state.isButtonClicked = !state.isButtonClicked;
}

export function coffee(event) {
  if(state.isMute) {
    sounds.buttonCoffeeAudio.pause()
  } else {
    sounds.buttonCoffeeAudio.play()
  }
  state.isMute = !state.isMute
 

  if (state.isButtonClicked) {
    el.buttonCoffee.style.backgroundColor = '#e0e0e5';
  } else {
    el.buttonCoffee.style.backgroundColor = '#bd8282';
  }
  
  state.isButtonClicked = !state.isButtonClicked;
}

export function fireplace(event) {
  if(state.isMute) {
    sounds.buttonFireplaceAudio.pause()
  } else {
    sounds.buttonFireplaceAudio.play()
  }
  state.isMute = !state.isMute
 

  if (state.isButtonClicked) {
    el.buttonFireplace.style.backgroundColor = '#e0e0e5';
  } else {
    el.buttonFireplace.style.backgroundColor = '#f85928';
  }
  
  state.isButtonClicked = !state.isButtonClicked;
}


