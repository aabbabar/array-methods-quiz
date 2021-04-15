console.log('script connected');

// const question = document.querySelector('.question1');

// question.addEventListener('click', () => console.log('clicked'));

const answerChoices = document.querySelectorAll('.answer-choice');
const submitButton = document.querySelector('.submit-button');

let answerSelection = 0;
let answers = [];

const selectAnswer = (answer) => {
  resetSelection();
  answer.style.backgroundColor = 'green';
  if (!answerSelection) toggleSubmitButtonActive();
  answerSelection = answer.id.split('-')[1];
};

const submitAnswer = (answer) => {
  answers.push(answer);
  answerSelection = 0;
  console.log('answer submitted: ', answer);
  console.log('answers: ', answers);
  toggleSubmitButtonActive();
  resetSelection();
};

const reset = () => {
  if (answerSelection) toggleSubmitButtonActive();
  resetSelection();
  answerSelection = 0;
  answers = [];
};

const toggleSubmitButtonActive = () => (submitButton.disabled = !submitButton.disabled);

const resetSelection = () => answerChoices.forEach((answer) => (answer.style.backgroundColor = 'indigo'));

answerChoices.forEach((answer) => {
  answer.addEventListener('click', () => selectAnswer(answer));
});

// submitButton.addEventListener('submit', () => submitAnswer(answerSelection));
submitButton.addEventListener('click', () => submitAnswer(answerSelection));
