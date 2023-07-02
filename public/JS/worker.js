let seconds = 0;
let minutes = 0;

function startTimer() {
  setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    postMessage({ minutes, seconds });
  }, 1000);
}

startTimer();
