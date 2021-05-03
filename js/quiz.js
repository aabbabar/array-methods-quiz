function selectChoice(choice) {
  if (!choicesActive) return;
  const choiceNum = +choice.id.split('-')[1];
  if (choiceNum !== selectedChoice) {
    choice.classList.add('choice-selected');
    selectedChoice > -1 ? resetSelection() : submitButton.removeAttribute('disabled');
    selectedChoice = choiceNum;
  }
}

function submitAnswer() {
  showCorrectAnswer();
  resetTimer();
  submitButton.removeEventListener('click', submitAnswer);
  submitButton.addEventListener('click', loadNextQuestion);
  if (submitButton.hasAttribute('disabled')) submitButton.removeAttribute('disabled');
  submitButton.innerText = 'Next';
}

function showCorrectAnswer() {
  choicesActive = false;
  let isCorrect = selectedChoice === questions[currentQuestion].correct;
  if (isCorrect) correctAnswers++;
  else if (selectedChoice > -1) choices[selectedChoice].classList.add('choice-incorrect');
  showResponse(isCorrect);
  choices[questions[currentQuestion].correct].classList.add('choice-correct');
  choices.forEach((choice) => {
    if (!choice.classList.contains('choice-incorrect') && !choice.classList.contains('choice-correct')) {
      choice.classList.add('choice-disabled');
    }
  });
}

function showResponse(correct) {
  response.innerText = correct ? 'Correct' : 'Incorrect';
  response.classList.add(correct ? 'response-correct' : 'response-incorrect');
  response.style.display = 'block';
}

function loadNextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) return showResults();
  resetSelection();
  questionNumber.innerText = currentQuestion + 1;
  submitButton.setAttribute('disabled', '');
  submitButton.removeEventListener('click', loadNextQuestion);
  submitButton.addEventListener('click', submitAnswer);
  submitButton.innerText = 'Submit';
  response.style.display = 'none';
  response.classList.remove('response-correct', 'response-incorrect');
  choicesActive = true;
  timer.innerText = count;
  countdownTimer = setInterval(tickTimer, 1000);
  questions[currentQuestion].display(input, method, output, choices);
}

function resetSelection() {
  if (selectedChoice > -1) choices[selectedChoice].classList.remove('choice-selected');
  choices.forEach((choice) => choice.classList.remove('choice-correct', 'choice-incorrect', 'choice-disabled'));
  selectedChoice = -1;
}
