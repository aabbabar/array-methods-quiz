const questionData = [
  {
    input   : `const input = ['apple', 'pear', 'banana', 'orange', 'grape'];`,
    method  : `const output = ?`,
    output  : `output = ['apples', 'pears', 'bananas', 'oranges', 'grapes'];`,
    queried : 'method',
    choices : [
      `array.map(fruit = fruit + 's');`,
      `array.map(fruit => fruit + 's');`,
      `array.map(fruit => fruit += 's');`,
      `array.map(fruit + 's');`
    ],
    correct : 1
  },
  {
    input   : `const array = [10, 20, 30, 40, 50];`,
    method  : `const output = ?`,
    output  : `output = [100, 200, 300, 400, 500];`,
    queried : 'method',
    choices : [
      `array.map(num * 10);`,
      `array.map(num = num * 10);`,
      `array.map(num => num * 10);`,
      `array.map(num => num + 0)`
    ],
    correct : 2
  },
  {
    input   : `const input = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']`,
    method  : `const output = ?`,
    output  : `output = ['Tue', 'Thu'];`,
    queried : 'method',
    choices : [
      `array.filter(day => day[0] === 'T')`,
      `array.filter(day = 'Tue' || 'Thu')`,
      `array.filter(day => day.split(0) === 'T')`,
      `array.filter(day => day.unshift() === 'T')`
    ],
    correct : 0
  },
  {
    input   : `const input = [1, 2, 2, 2, 3, 4, 4, 5]`,
    method  : `const output = input.reduce((obj, num) => {
                obj[num] = ++obj[num] || 1;
                return obj;
              }, {});`,
    output  : `output = ?`,
    queried : 'output',
    choices : [
      `[ 1, 2, 3, 4, 5 ]`,
      `{'1': [1, 3, 5], '2': [4], '3': [2]}`,
      `{'1': 1, '2': 3, '3': 1, '4': 2, '5': 1}`,
      `[ 'insert real choice here' ]`
    ],
    correct : 2
  },
  {
    input   : `const input = ['red', 'orange', 'yellow', 'green', 'blue']`,
    method  : `const output = input.filter(word => word.length < 4)`,
    output  : `output = ?`,
    queried : 'output',
    choices : [ `[ 'orange', 'yellow', 'green' ]`, `['red', 'blue']`, `['red']`, `'red'` ],
    correct : 2
  },
  {
    input   : `const input = [6, 2, 5, 7, 8, 1, 3, 9, 4]`,
    method  : `const output = array.sort((a, b) => a - b);`,
    output  : `output = ?`,
    queried : 'output',
    choices : [
      `[1, 2, 3, 4, 5, 6, 7, 8, 9]`,
      `[9, 8, 7, 6, 5, 4, 3, 2, 1]`,
      `[4, 9, 3, 1, 8, 7, 5, 2, 6]`,
      `[6, 2, 5, 7, 8, 1, 3, 9, 4]`
    ],
    correct : 0
  },
  {
    input   : `const input = [10, 10, 10, 10, 10]`,
    method  : `const output = ?`,
    output  : `output = 50;`,
    queried : 'method',
    choices : [
      `input.reduce((sum, num) => return sum + num);`,
      `input.reduce((sum, num) => sum + num);`,
      `input.reduce((sum, num) => sum += num);`,
      `input.reduce((sum, num) => num += sum);`
    ],
    correct : 1
  }
];

export { questionData };
