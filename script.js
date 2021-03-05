'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
*/

function checkGuess() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (1 < score) {
        if (!guess) {
            document.querySelector('.message').textContent =
                '⛔ No number entered...';
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent =
                '🎉 Correct number!';
            document.querySelector('body').style.backgroundColor =
                'DarkOliveGreen';
            document.querySelector('.number').style.width = '30rem';
        } else if (0 < guess && guess < secretNumber) {
            document.querySelector('.message').textContent = '📉 Too low...';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (secretNumber < guess && guess <= 20) {
            document.querySelector('.message').textContent = '📈 Too high...';
            score--;
            document.querySelector('.score').textContent = score;
        } else
            document.querySelector('.message').textContent =
                '⛔ Out of range...';
    } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = '😭 Game over';
        document.querySelector('body').style.backgroundColor = 'FireBrick';
    }
}

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', checkGuess);
