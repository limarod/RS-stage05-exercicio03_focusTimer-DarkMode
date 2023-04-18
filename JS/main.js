

//variables
const buttonPlay = document.querySelector(".buttonPlay")
const buttonStop = document.querySelector(".buttonStop")
const buttonPlus = document.querySelector(".buttonPlus")
const buttonMinus = document.querySelector(".buttonMinus")
const cardForest = document.querySelector(".cardForest")
const cardRain = document.querySelector(".cardRain")
const cardCoffee = document.querySelector(".cardCoffee")
const cardFirePlace = document.querySelector(".cardFirePlace")
let minutesDisplay = document.querySelector("#minutes")
let secondsDisplay = document.querySelector("#seconds")

let minutes
let isTimerRunning = false

//soundsEffects
const forestAudio = new Audio ("./Sounds/Floresta.wav")
const rainAudio = new Audio ("./Sounds/Chuva.wav")
const coffeeAudio = new Audio ("./Sounds/Cafeteria.wav")
const firePlaceAudio = new Audio ("./Sounds/Lareira.wav")

forestAudio.loop = true
rainAudio.loop = true
coffeeAudio.loop = true
firePlaceAudio.loop = true

//New variables darkMode

const buttonlightMode = document.querySelector(".buttonlightMode")
const buttonDarkMode = document.querySelector(".buttonDarkMode")
const body = document.body
const controls = document.querySelectorAll(".controls button")





//functions

function countDown(){

  breakCountDown = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent) 
    let minutes = Number(minutesDisplay.textContent)
       
    if (minutes == 00 && seconds == 00 ){
    stop()
    cardRain.classList.remove("cardColor")
    cardCoffee.classList.remove("cardColor")
    cardFirePlace.classList.remove("cardColor")
    cardForest.classList.remove("cardColor")
    return
    }

    if (seconds <= 0){
      seconds = 60
      
      -- minutes  
    }

    updateDisplay(minutes, String(seconds - 1) )
    
    countDown()
   
  }, 1000);

}

function updateDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

//controls Functions

function play(){
 
  if(!isTimerRunning){
  
    isTimerRunning = true;
    
    countDown()
  }
}

function stop(){

  forestAudio.pause()
  rainAudio.pause()
  coffeeAudio.pause()
  firePlaceAudio.pause()
  resetColors()
  clearTimeout(breakCountDown) 
  isTimerRunning = false
}

function plus(){
  let seconds = Number(secondsDisplay.textContent) 
  let minutes = Number(minutesDisplay.textContent)
  
  if( seconds >54 ){
    ++ minutes
    seconds = (seconds - 60) + 5
    
    updateDisplay(minutes, String(seconds))
    return
  }

  updateDisplay(minutes, String(seconds + 5))
  // clearTimeout(breakCountDown) 
  // countDown()
}

function minus(){
  let seconds = Number(secondsDisplay.textContent) 
  let minutes = Number(minutesDisplay.textContent)

  if(minutes == 0 && seconds < 5 ){
    minutes = 0
    seconds = 0
    updateDisplay(minutes, String(seconds))
    return
  }

  if( seconds < 5 ){
    seconds = 60 + seconds - 5
    -- minutes

    updateDisplay(minutes, String(seconds))
    return  
  }
  updateDisplay(minutes, String(seconds - 5))
  clearTimeout(breakCountDown) 
  // countDown()
  
}


//sounds functions cards
function resetColors(){
  cardForest.classList.remove("cardColor")
  cardRain.classList.remove("cardColor")
  cardCoffee.classList.remove("cardColor")
  cardFirePlace.classList.remove("cardColor")
}

function soundForest(){
  
  cardForest.classList.toggle("cardColor")
  cardRain.classList.remove("cardColor")
  cardCoffee.classList.remove("cardColor")
  cardFirePlace.classList.remove("cardColor")

  if(body.classList.contains("bodyDarkMode")){
  cardForest.classList.toggle("cardColorSelected")
  cardRain.classList.remove("cardColorSelected")
  cardCoffee.classList.remove("cardColorSelected")
  cardFirePlace.classList.remove("cardColorSelected")

  forestButton()

  if(!cardForest.classList.contains("cardColorSelected")){
    forestAudio.pause()
  }

  }
 
  forestButton()

  if(!cardForest.classList.contains("cardColor")){
    forestAudio.pause()
  }

}

function soundRain(){
  cardRain.classList.toggle("cardColor")
  cardForest.classList.remove("cardColor")
  cardCoffee.classList.remove("cardColor")
  cardFirePlace.classList.remove("cardColor")

  if(body.classList.contains("bodyDarkMode")){
  cardRain.classList.toggle("cardColorSelected")
  cardForest.classList.remove("cardColorSelected")
  cardCoffee.classList.remove("cardColorSelected")
  cardFirePlace.classList.remove("cardColorSelected")

  rainButton()
  if(!cardRain.classList.contains("cardColorSelected")){
    rainAudio.pause()
  }

  }

  
  rainButton()

  if(!cardRain.classList.contains("cardColor")){
    rainAudio.pause()
  }

}

function soundCoffee(){
  cardCoffee.classList.toggle("cardColor")
  cardForest.classList.remove("cardColor")
  cardRain.classList.remove("cardColor")
  cardFirePlace.classList.remove("cardColor")
  
  if(body.classList.contains("bodyDarkMode")){
  cardCoffee.classList.toggle("cardColorSelected")
  cardForest.classList.remove("cardColorSelected")
  cardRain.classList.remove("cardColorSelected")
  cardFirePlace.classList.remove("cardColorSelected")
  
  coffeButton()
  
  if(!cardCoffee.classList.contains("cardColorSelected")){
    coffeeAudio.pause()
  }
  }

  coffeButton()
  
  if(!cardCoffee.classList.contains("cardColor")){
    coffeeAudio.pause()
  }
}

function soundFirePlace(){
  cardFirePlace.classList.toggle("cardColor")
  cardForest.classList.remove("cardColor")
  cardRain.classList.remove("cardColor")
  cardCoffee.classList.remove("cardColor")
  
  if(body.classList.contains("bodyDarkMode")){
  cardFirePlace.classList.toggle("cardColorSelected")
  cardForest.classList.remove("cardColorSelected")
  cardRain.classList.remove("cardColorSelected")
  cardCoffee.classList.remove("cardColorSelected")

  firePlaceButton()

  if(!cardFirePlace.classList.contains("cardColorSelected")){
    firePlaceAudio.pause()
  }
  }

  firePlaceButton()

  if(!cardFirePlace.classList.contains("cardColor")){
    firePlaceAudio.pause()
  }
}

function forestButton(){
  forestAudio.play()
  rainAudio.pause()
  coffeeAudio.pause()
  firePlaceAudio.pause()
  volumeRange.forEach(setVolumeBtn)
}

function rainButton(){
  rainAudio.play()
  forestAudio.pause()
  coffeeAudio.pause()
  firePlaceAudio.pause()
}

function coffeButton(){
  coffeeAudio.play()
  rainAudio.pause()
  forestAudio.pause()
  firePlaceAudio.pause()

}

function firePlaceButton(){
  firePlaceAudio.play()
  coffeeAudio.pause()
  rainAudio.pause()
  forestAudio.pause()
}





//New functions dark Mode

function colorButtonDarkMode (button){
  button.classList.toggle("inputDarkMode")
}




function toDarkMode(){
  buttonlightMode.classList.toggle("hide")
  buttonDarkMode.classList.toggle("hide")
  body.classList.add("bodyDarkMode")
  // controls.forEach.classList.add("buttonDarkMode path")
  buttonsDarkMode()
  volumeRange.forEach(colorButtonDarkMode)
  newColorDarkMode()
  selectedButton()
}

function toLightMode(){
  buttonDarkMode.classList.toggle("hide")
  buttonlightMode.classList.toggle("hide")
  body.classList.remove("bodyDarkMode")
  // controls.forEach.classList.remove("buttonDarkMode")
  buttonsDarkMode()
  volumeRange.forEach(colorButtonDarkMode)
  resetColorDarkMode()
  selectedButton()
}




function buttonsDarkMode(){
  buttonPlay.classList.toggle("buttonDarkMode")
  buttonStop.classList.toggle("buttonDarkMode")
  buttonPlus.classList.toggle("buttonDarkMode")
  buttonMinus.classList.toggle("buttonDarkMode")
}






function newColorDarkMode(){
  cardCoffee.classList.add("cardColorDarkMode")
  cardForest.classList.add("cardColorDarkMode")
  cardRain.classList.add("cardColorDarkMode")
  cardFirePlace.classList.add("cardColorDarkMode")
}

function resetColorDarkMode(){
  cardForest.classList.remove("cardColorDarkMode")
  cardRain.classList.remove("cardColorDarkMode")
  cardCoffee.classList.remove("cardColorDarkMode")
  cardFirePlace.classList.remove("cardColorDarkMode")
}

function selectedButton () {
  if(cardForest.classList.contains("cardColor")){
    cardForest.classList.toggle("cardColorSelected")
  } else if(cardRain.classList.contains("cardColor")){
    cardRain.classList.toggle("cardColorSelected")
  } else if (cardCoffee.classList.contains("cardColor")){
    cardCoffee.classList.toggle("cardColorSelected")
  } else if (cardFirePlace.classList.contains("cardColor")){
    cardFirePlace.classList.toggle("cardColorSelected")
  }
} 




//Events
buttonPlay.addEventListener("click", play)
buttonStop.addEventListener("click", stop)
buttonPlus.addEventListener("click", plus)
buttonMinus.addEventListener("click", minus)
cardForest.addEventListener("click", soundForest)
cardRain.addEventListener("click", soundRain)
cardCoffee.addEventListener("click", soundCoffee)
cardFirePlace.addEventListener("click", soundFirePlace)


//events dark Mode
buttonlightMode.addEventListener("click", toDarkMode)
buttonDarkMode.addEventListener("click", toLightMode)
volumeRange.forEach(function(range){
  range.addEventListener("change", handleVolume)
})


const volumeRange = document.querySelectorAll(".volumeRange")




volumeRange.forEach(setVolumeBtn)


function setVolumeBtn(range){
  forestAudio.volume = range.value / 100;
  rainAudio.volume = range.value / 100;
  coffeeAudio.volume = range.value / 100;
  firePlaceAudio.volume = range.value / 100;
}

function handleVolume(event){
  setVolumeBtn(event.target)
}
//PESQUISAR TODA QUESTÂO DOS PARAMETROS PASSADO DENTRO DE CADA FUNCTION