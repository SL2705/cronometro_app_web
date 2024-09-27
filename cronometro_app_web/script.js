let startTime, updatedTime, difference, tInterval;
let running = false, paused = false;
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
const display = document.getElementById('display');
const startPauseButton = document.getElementById('startPause');
const resetButton = document.getElementById('reset');

function startPauseTimer() {
    if (!running) {
        running = true;
        startPauseButton.textContent = 'Pausar';
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
    } else if (paused) {
        paused = false;
        startPauseButton.textContent = 'Pausar';
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(updateTime, 1);
    } else {
        paused = true;
        clearInterval(tInterval);
        startPauseButton.textContent = 'Iniciar';
    }
}

function resetTimer() {
    running = false;
    paused = false;
    clearInterval(tInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    display.textContent = '00:00:00:000';
    startPauseButton.textContent = 'Iniciar';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    seconds = Math.floor((difference / 1000) % 60);
    milliseconds = Math.floor(difference % 1000);

    display.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (milliseconds < 100 ? "0" : "") + (milliseconds < 10 ? "0" : "") + milliseconds;
}

startPauseButton.addEventListener('click', startPauseTimer);
resetButton.addEventListener('click', resetTimer);
