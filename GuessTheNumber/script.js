let randomNumber = Math.round(Math.random() * 100);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const startOverBtn = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  const num = Number(guess);
  if (isNaN(num) || num < 1 || num > 100) {
    consolelog("Invalid guess. Please enter a number between 1 and 100.");
    return false;
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayMessage(`Game Over! The number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    guessSlot.innerHTML = `Previos guesses: ${prevGuess.join(" ")}`;
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too low!");
    userInput.value = "";
    numGuess++;
  } else if (guess > randomNumber) {
    displayMessage("Too high!");
    userInput.value = "";
    numGuess++;
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML = `Previos guesses: ${prevGuess.join(" ")}`;
  remaining.innerHTML = `Remaining Guesses: ${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOverBtn.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randomNumber = Math.round(Math.random() * 100);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `Remaining Guesses: ${11 - numGuess}`;
    lowOrHi.innerHTML = "";
    userInput.removeAttribute("disabled");
    startOverBtn.removeChild(p);
    window.location.reload();
    playGame = true;
  });
}
