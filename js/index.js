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
submitButton.addEventListener('click', submitAnswer);
resetButton.addEventListener('click', resetQuiz);

let currentQuestion = 0;
let selectedChoice = -1;
let correctAnswers = 0;
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
  const choiceNum = +choice.id.split('-')[1];
  if (choiceNum !== selectedChoice) {
    choice.classList.add('choice-selected');
    selectedChoice > -1 ? resetSelection() : submitButton.removeAttribute('disabled');
    selectedChoice = choiceNum;
  }
}

function submitAnswer() {
  answers.push(selectedChoice);
  if (selectedChoice === questions[currentQuestion].correct) correctAnswers++;
  currentQuestion++;
  loadNextQuestion();
}

function loadNextQuestion() {
  if (currentQuestion >= questions.length) return showResults();
  if (selectedChoice > 0) resetSelection();
  submitButton.setAttribute('disabled', '');
  questions[currentQuestion].display(input, method, output, choices);
}

function resetSelection() {
  choices[selectedChoice].classList.remove('choice-selected');
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
