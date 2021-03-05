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
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor =
                'DarkOliveGreen';
            document.querySelector('.number').style.width = '30rem';
        } else if (0 < guess && guess < secretNumber) {
            document.querySelector('.message').textContent =
                '📉 ' + guess + ' is too low...';
            score--;
        } else if (secretNumber < guess && guess <= 20) {
            document.querySelector('.message').textContent =
                '📈 ' + guess + ' is too high...';
            score--;
        } else
            document.querySelector('.message').textContent =
                '⛔ Out of range...';
    } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = '😭 Game over';
        document.querySelector('body').style.backgroundColor = 'FireBrick';
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
}

function reset() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`SecretNumber ${secretNumber}`);
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(`Secret Number: ${secretNumber}`);

/* document.querySelector('.number').textContent = secretNumber;*/

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.guess').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

document.querySelector('.again').addEventListener('click', reset);
