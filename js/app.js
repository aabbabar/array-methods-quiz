const pages = document.querySelectorAll('.page');
const [ start, instructions, quiz, results ] = pages;
const [ input, method, output ] = document.querySelectorAll('.question code');
const choices = document.querySelectorAll('.answer-choice');
const totalScore = document.querySelector('.total-score');
const timer = document.querySelector('.timer-seconds');
const timerBar = document.querySelector('.timer-bar');
const questionNumber = document.querySelector('.question-number');
const response = document.querySelector('.response');
const startButton = document.querySelector('.start-button');
const beginButton = document.querySelector('.begin-button');
const submitButton = document.querySelector('.submit-button');
const resetButton = document.querySelector('.reset-button');

startButton.addEventListener('click', showInstructions);
beginButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', loadNextQuestion);
resetButton.addEventListener('click', resetQuiz);
choices.forEach((choice) => choice.addEventListener('click', () => selectChoice(choice)));

let currentQuestion = -1;
let selectedChoice = -1;
let correctAnswers = 0;
let choicesActive = false;
let countdownTimer;
const maxCount = 60;
let count = maxCount;
