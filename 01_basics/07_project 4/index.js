let randomNumber=parseInt(Math.random()*100 + 1);
const submit= document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[];
let numGuess=1;

let playGames=true

if (playGames) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
   if(isNaN(guess)){
     alert('Please enter a valid Number')
   }else if(guess<1){
    alert('please enter a number more than 1')
   }else if(guess>100){
    alert('please enter a number less than 100')
   }else{
    prevGuess.push(guess)
    if (numGuess==11) {
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`)
         endGame() 
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
   }
}

function checkGuess(guess){
 if(guess===randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
 }else if(guess<randomNumber){
    displayMessage(`The Number is Too Low`)
 }
 else if(guess>randomNumber){
    displayMessage(`The Number is Too High`)
 }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+= `${guess}   `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(guess){
     lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerText=`<h2 id="newGame">Start New Game</h2>`;
startOver.appendChild(p)
playGames=false;
newGame()
}

function newGame(){
  const newGameButton=document.querySelector("#newGame");
  newGameButton.addEventListener('click',function(e)){
    randomNumber=parseInt(Math.random()*100 + 1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGames=true;
  }
}
