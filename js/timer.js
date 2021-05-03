function tickTimer() {
  count ? (timer.innerText = --count) : submitAnswer();
  const timerWidth = (maxCount - count) * (100 / maxCount);
  timerBar.style.width = `${timerWidth}%`;
}

function resetTimer() {
  clearInterval(countdownTimer);
  count = maxCount;
  timerBar.style.width = '0%';
}
