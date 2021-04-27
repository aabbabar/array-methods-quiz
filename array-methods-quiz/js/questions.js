import { Question } from './Question.js';
import { questionData } from './questionData.js';

const questions = questionData.map((question) => {
  const { input, method, output, choices, queried, correct } = question;
  return new Question(input, method, output, choices, queried, correct);
});

export { questions };
