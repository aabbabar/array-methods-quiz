function showInstructions() {
  start.style.display = 'none';
  instructions.style.display = 'flex';
}

function startQuiz() {
  instructions.style.display = 'none';
  quiz.style.display = 'flex';
  loadNextQuestion();
}

function showResults() {
  quiz.style.display = 'none';
  results.style.display = 'flex';
  totalScore.innerText = correctAnswers;
}

function resetQuiz() {
  resetSelection();
  currentQuestion = -1;
  correctAnswers = 0;
  results.style.display = 'none';
  instructions.style.display = 'flex';
}
