'use strict';

// DOM links
const answerBox = document.querySelector('.number');
const body = document.querySelector('body');
const highScoreBox = document.querySelector('.highscore');
const guessBox = document.querySelector('.guess');
const scoreBox = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const tryAgainButton = document.querySelector('.again');

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let finished = false;

// Functions
function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function checkGuess() {
    const guess = Number(guessBox.value);

    if (1 < score && !finished) {
        if (!guess) {
            displayMessage('⛔ No number entered...');
        } else if (guess === secretNumber) {
            displayMessage('🎉 ' + guess + ' is correct!');
            answerBox.textContent = secretNumber;
            body.style.backgroundColor = 'DarkOliveGreen';
            answerBox.style.width = '30rem';
            finished = true;
            if (highScore < score) {
                highScore = score;
                highScoreBox.textContent = highScore;
            }
        } else if (0 < guess && guess <= 20) {
            displayMessage(
                guess < secretNumber
                    ? '📉 ' + guess + ' is too low...'
                    : '📈 ' + guess + ' is too high...'
            );
            score--;
        } else displayMessage('⛔ Out of range...');
    } else if (finished) {
    } else {
        score = 0;
        displayMessage('😭 Game over');
        body.style.backgroundColor = 'FireBrick';
    }
    scoreBox.textContent = score;
    guessBox.value = '';
}

function reset() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`Secret Number: ${secretNumber}`);
    score = 20;
    finished = false;
    body.style.backgroundColor = '#222';
    guessBox.value = '';
    displayMessage('Start guessing...');
    answerBox.textContent = '?';
    answerBox.style.width = '15rem';
    scoreBox.textContent = score;
}

// Event Listeners
checkButton.addEventListener('click', checkGuess);
guessBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});
tryAgainButton.addEventListener('click', reset);
