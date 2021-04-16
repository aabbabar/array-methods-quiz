const questionData = [
  {
    input   : `const input = ['apple', 'pear', 'banana', 'orange', 'grape', 'plum'];`,
    method  : `const output = ?`,
    output  : `output = ['apples', 'pears', 'bananas', 'oranges', 'grapes', 'plums'];`,
    queried : 'method',
    choices : [
      `array.map(fruit = fruit + 's');`,
      `array.map(fruit => fruit + 's');`,
      `array.map(fruit => fruit += 's');`,
      `array.map(fruit + 's');`
    ]
  },
  {
    input   : `const array = [ 10, 20, 30, 40, 50 ];`,
    method  : `const output = ?`,
    output  : `output = [ 100, 200, 300, 400, 500 ];`,
    queried : 'method',
    choices : [
      `array.map(num * 10);`,
      `array.map(num = num * 10);`,
      `array.map(num => num * 10);`,
      `array.map(num => num + 0)`
    ]
  }
];

export { questionData };
