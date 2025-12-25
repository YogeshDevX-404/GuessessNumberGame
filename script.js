const userInput = document.querySelector('.user-input');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const allGuesses = document.querySelector('.all-guesses');
const submitBtn = document.querySelector('.submit-btn');
const startGameBtn = document.querySelector('.start-game');

function a() {
const allGuessesArray =  [];
let randomNumber = Math.floor(Math.random() * 101);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if(userInputValue < randomNumber) {
       result.innerText = ('Too Low!');
    } else if(userInputValue > randomNumber) {
       result.innerText = ('Too High!');
    } else {
       result.innerText = ('Congrates!');
        submitBtn.disabled = true;
        startGameBtn.disabled = false;
    }
    allGuessesArray.push(userInputValue);
    allGuesses.innerText = `Your Guesses: ${allGuessesArray.join(', ')}`; 
    form.reset();
})

startGameBtn.addEventListener('click', function() {
    result.innerText = '';
    allGuesses.innerText = '';
    submitBtn.disabled = false;
    startGameBtn.disabled = true;
    randomNumber = Math.floor(Math.random() * 101);
})

}

a();