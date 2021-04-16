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
    ],
    correct : 1
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
    ],
    correct : 2
  },
  {
    input   : `const input = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]`,
    method  : `const output = ?`,
    output  : `output = ['Tuesday', 'Thursday'];`,
    queried : 'method',
    choices : [
      `array.filter(day = 'Tuesday' || 'Thursday')`,
      `array.filter(day => day.split('')[1] === 'T')`,
      `array.filter(day => day.unshift() === 'T')`,
      `array.filter(day => day[0] === 'T')`
    ],
    correct : 3
  },
  {
    input   : `const prices = [19.99, 10.00, 4.49, 20.52]`,
    method  : `const averagePrice = ?`,
    output  : `averagePrice = 13.75`,
    queried : 'method',
    choices : [
      `prices.reduce((avg, price, index) => { <br>
        &nbsp; return (avg * index + price) / (index + 1);<br>
       }, 0);`,
      `prices.reduce((avg, price, index) => {<br>
        &nbsp; return (avg + price) / index;<br>
      }, 0);`,
      `prices.reduce((avg, price, index) => {<br>
        &nbsp; return price + ((avg * index) / index);<br>
      }, 0);`,
      `prices.reduce((avg, price, index) => {<br>
        &nbsp; return (avg * index) / (price * index);<br>
      }, 0);`
    ],
    correct : 0
  }
];

export { questionData };
