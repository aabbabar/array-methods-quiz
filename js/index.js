import { questions } from './questions.js';

console.log(questions);
console.log('script connected');

const pages = document.querySelectorAll('.page');
const [ start, instructions, quiz, results ] = pages;
const [ input, method, output ] = document.querySelectorAll('.question code');
const choices = document.querySelectorAll('.answer-choice');

let currentQuestion = 0;
let selectedChoice = 0;
const answers = [];

const startButton = document.querySelector('.start-button');
const beginButton = document.querySelector('.begin-button');
const submitButton = document.querySelector('.submit-button');
startButton.addEventListener('click', showInstructions);
beginButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitAnswer);

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
  choice.classList.add('choice-selected');
  if (selectedChoice) choices[selectedChoice].classList.remove('choice-selected');
  else submitButton.removeAttribute('disabled');
  selectedChoice = choice.id.split('-')[1];
  console.log(selectedChoice);
}

function submitAnswer() {
  answers.push(selectedChoice);
  console.log(answers);
  currentQuestion++;
  loadNextQuestion();
}

function loadNextQuestion() {
  if (currentQuestion >= questions.length) return showResults();
  questions[currentQuestion].display(input, method, output, choices);
}

console.log(choices);

choices.forEach((choice) => choice.addEventListener('click', () => selectChoice(choice)));
