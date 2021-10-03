"use strict";

let guessNumber = Math.floor(Math.random() * 20) + 1;
let highScore = document.querySelector(".highscore");
let score = document.querySelector(".score");
const checkButton = document.querySelector(".check");
const msg = document.querySelector(".message");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const body = document.querySelector("body");
const guess = document.querySelector(".guess");

function reset() {
  score.textContent = 20;
  number.textContent = "?";
  guess.value = "";
  body.style.backgroundColor = "#222";
  msg.textContent = "Start guessing...";
  guessNumber = Math.floor(Math.random() * 20) + 1;
  number.style.width = "15rem";
}

checkButton.addEventListener("click", function () {
  const value = guess.value;
  if (!value) {
    msg.textContent = "⛔ No number";
  } else {
    if (value == guessNumber) {
      msg.textContent = "🎉 Correct!!";
      number.textContent = value;
      body.style.backgroundColor = "#60b347";
      number.style.width = "30rem";
      if (highScore.textContent < score.textContent) {
        highScore.textContent = score.textContent;
      }
    } else if (value < guessNumber) {
      if (score.textContent > 1) {
        msg.textContent = "📉 Too Low";
        score.textContent--;
      } else {
        msg.textContent = "😭 Sorry, you lost the game";
        score.textContent = 0;
        number.textContent = guessNumber;
      }
    } else {
      if (score.textContent > 1) {
        msg.textContent = "📈 Too High";
        score.textContent--;
      } else {
        msg.textContent = "😭 Sorry, you lost the game";
        score.textContent = 0;
        number = textContent = guessNumber;
      }
    }
  }
});

again.addEventListener("click", function () {
  reset();
});
