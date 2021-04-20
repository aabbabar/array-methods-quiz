import { questions } from './questions.js';

console.log(questions);
console.log('script connected');

const pages = document.querySelectorAll('.page');
const [ start, instructions, quiz, results ] = pages;
const [ input, method, output ] = document.querySelectorAll('.question code');
const choices = document.querySelectorAll('.answer-choice');
const totalScore = document.querySelector('.total-score');
choices.forEach((choice) => choice.addEventListener('click', () => selectChoice(choice)));

const startButton = document.querySelector('.start-button');
const beginButton = document.querySelector('.begin-button');
const submitButton = document.querySelector('.submit-button');
const resetButton = document.querySelector('.reset-button');
startButton.addEventListener('click', showInstructions);
beginButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', loadNextQuestion);
resetButton.addEventListener('click', resetQuiz);

let currentQuestion = 0;
let selectedChoice = -1;
let correctAnswers = 0;
let choicesActive = false;
const answers = []; //necessary to store?
console.log(choices);

function showInstructions() {
  start.style.display = 'none';
  instructions.style.display = 'flex';
}

function startQuiz() {
  instructions.style.display = 'none';
  quiz.style.display = 'flex';
  loadNextQuestion();
}

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
  answers.push(selectedChoice);
  showCorrectAnswer();
  submitButton.removeEventListener('click', submitAnswer);
  submitButton.addEventListener('click', loadNextQuestion);
  submitButton.innerText = 'Next';
}

function showCorrectAnswer() {
  choicesActive = false;
  if (selectedChoice === questions[currentQuestion].correct) correctAnswers++;
  else choices[selectedChoice].classList.add('choice-incorrect');
  choices[questions[currentQuestion].correct].classList.add('choice-correct');
}

function loadNextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) return showResults();
  if (selectedChoice > -1) resetSelection();
  submitButton.setAttribute('disabled', '');
  submitButton.removeEventListener('click', loadNextQuestion);
  submitButton.addEventListener('click', submitAnswer);
  submitButton.innerText = 'Submit';
  choicesActive = true;
  questions[currentQuestion].display(input, method, output, choices);
}

function resetSelection() {
  choices[selectedChoice].classList.remove('choice-selected');
  choices.forEach((choice) => choice.classList.remove('choice-correct', 'choice-incorrect'));
  selectedChoice = -1;
}

function showResults() {
  quiz.style.display = 'none';
  results.style.display = 'flex';
  totalScore.innerText = correctAnswers;
}

function resetQuiz() {
  resetSelection();
  currentQuestion = 0;
  correctAnswers = 0;
  results.style.display = 'none';
  instructions.style.display = 'flex';
}

showInstructions();
startQuiz();
