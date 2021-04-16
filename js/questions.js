import { Question } from './Question.js';
import { questionData } from './questionData.js';

const questions = questionData.map((question) => {
  const { input, method, output, choices } = question;
  return new Question(input, method, output, choices);
});

export { questions };
