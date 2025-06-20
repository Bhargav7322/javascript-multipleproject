window.onload = function () {
  let seconds = 0;
  let miliSeconds = 0;

  let interval;

  const addSeconds = document.querySelector(".second");
  const addMiliSeconds = document.querySelector(".mili");

  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");

  startBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(start, 10);
  };

  stopBtn.onclick = function () {
    clearInterval(interval);
  };

  resetBtn.onclick = function () {
    clearInterval(interval);
    seconds = 0;
    miliSeconds = 0;
    addSeconds.innerHTML = "00";
    addMiliSeconds.innerHTML = "00";
  };

  function start() {
    miliSeconds++;
    if (miliSeconds < 10) {
      addMiliSeconds.innerHTML = "0" + miliSeconds;
    } else {
      addMiliSeconds.innerHTML = miliSeconds;
    }

    if (miliSeconds > 99) {
      seconds++;
      addSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
      miliSeconds = 0;
      addMiliSeconds.innerHTML = "00";
    }
  }
};
