class Question {
  constructor(input, method, output, choices) {
    this.input = input;
    this.method = method;
    this.output = output;
    this.choices = choices;
  }
  display(input, method, output, choices) {
    input.innerText = this.input;
    method.innerText = this.method;
    output.innerText = this.output;
    choices.forEach((choice, index) => {
      choice.innerHTML = `<code>${this.choices[index]}</code>`;
    });
  }
}

export { Question };
