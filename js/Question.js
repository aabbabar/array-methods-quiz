class Question {
  constructor(input, method, output, choices, queried, correct) {
    this.input = input;
    this.method = method;
    this.output = output;
    this.choices = choices;
    this.queried = queried;
    this.correct = correct;
  }
  display(input, method, output, choices) {
    input.innerText = this.input;
    method.innerHTML = this.method;
    output.innerText = this.output;
    choices.forEach((choice, index) => (choice.innerHTML = `<code>${this.choices[index]}</code>`));
    [ input, method, output ].forEach((section) => section.classList.remove('queried'));
    this.queried === 'method' ? method.classList.add('queried') : output.classList.add('queried');
  }
}

export { Question };

// const output = input.reduce((obj, num) => {
//   obj[num] = ++obj[num] || 1;
//   return obj;
// }, {});
