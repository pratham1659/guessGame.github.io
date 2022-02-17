let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let startAudio = new Audio("./sound/gamestart.wav");
let clickAudio = new Audio("./sound/click.wav");
let overAudio = new Audio("./sound/gameover.mp3");
let winAudio = new Audio("./sound/gamewin.mp3");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  console.log(computerGuess);
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("newGameButton").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

// Reload The Page
const newGameBegin = () => {
  startAudio.play();
  window.location.reload();
};
//start new game code logic
const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

//Main Logic of our App
const compareGuess = () => {
  clickAudio.play();
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  //   check the value low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is High 😖";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is Low 😔";
      userNumberUpdate.value = "";
    } else {
      winAudio.play();
      userGuessUpdate.innerHTML = "It`s Correct 🤩";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      overAudio.play();
      userGuessUpdate.innerHTML = `You Loose!! Correct Number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      overAudio.play();
      userGuessUpdate.innerHTML = `You Loose!! Correct Number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      winAudio.play();
      userGuessUpdate.innerHTML = "It`s Correct 🤩";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  startAudio.play();
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  startAudio.play();
  maxGuess = 5;
  startGame();
};
