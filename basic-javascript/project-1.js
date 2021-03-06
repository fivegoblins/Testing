/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (!num) {
    return 0;
  }
  if (typeof num === 'string') {
    throw new Error('Should be a number');
  }
  return num * 10;
};

const subtractFive = num => {
  return num - 5;
};

const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
};

const lessThanNinety = num => {
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const divide = (x, y) => {
  return x / y;
};

const multiply = (x, y) => {
  return x * y;
};

const getRemainder = (x, y) => {
  return x % y;
};

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  return num * num;
};

const cube = num => {
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  return num ** exponent;
};

const roundNumber = num => {
  return Math.round(num);
};

const roundUp = num => {
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  if (!lastName) {
    return `${firstName} McNoName`;
  }
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (!name) {
    return 'Hello you!';
  }
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if (!length || !width) {
    return 'Rectangles need a length and a width';
  }
  return length * width;
};

const getTriangleArea = (base, height) => {
  if (!base || !height) {
    return 'Triangles need a base and a height';
  }
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  if (!radius) {
    return 'Circles need a radius';
  }
  const unrounded =  Math.PI * radius * radius;
  return Math.round(unrounded);
};

const getRectangularPrismVolume = (length, width, height) => {
  if (!width || !height || !length) {
    return 'Prisms need a width, height, and length';
  }
  return width * height * length;
};

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
