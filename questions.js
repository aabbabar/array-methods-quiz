// question 1

const array = [ 10, 20, 30, 40, 50 ];

result = [ 100, 200, 300, 400, 500 ];

const result = array.map(num * 10);
const result = array.map((num = num * 10));
const result = array.map((num) => num * 10);
array.map((result) => num * 10);

//question 2

const array = [ 'apple', 'pear', 'banana', 'orange', 'grape', 'plum' ];

result = [ 'apples', 'pears', 'bananas', 'oranges', 'grapes', 'plums' ];

const result = array.map((fruit = fruit + 's'));
const result = array.map((fruit) => fruit + 's');

//q3 - filter

const array = [
  {
    name : 'hedgehog',
    size : 'small'
  },
  {
    name : 'deer',
    size : 'large'
  },
  {
    name : 'boar',
    size : 'medium'
  },
  {
    name : 'otter',
    size : 'medium'
  },
  {
    name : 'beaver',
    size : 'medium'
  }
];

const result = array.filter((animal) => animal.size === 'medium');

result = [ 'boar', 'otter', 'beaver' ];

//q4 - filter

const array = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

const result = array.filter((day) => day[0] === 'T');

result = [ 'Tuesday', 'Thursday' ];

//q5

const array = [ 6, 2, 5, 7, 8, 1, 3, 9, 4 ];

const result = array.sort((a, b) => a - b);

result = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];

//q6

const prices = [ 19.99, 10.0, 4.49, 20.52 ];

const averagePrice = prices.reduce((avg, price, index) => {
  return (avg * index + price) / (index + 1);
}, 0);

averagePrice = 13.75;
