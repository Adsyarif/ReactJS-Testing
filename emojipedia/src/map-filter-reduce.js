var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const double = (x) => {
//   return x * 2;
// };
// const newNumber = number.map(double);

const newNumber = numbers.map((x) => {
  return x * 2;
});

// var newNumber = [];
// const double = (x) => {
//   newNumber.push(x * 2);
// };
// numbers.forEach(double);

// var newNumber = [];
// numbers.forEach((x) => {
//   newNumber.push(x * 2);
// });

var numbers = [3, 56, 2, 48, 5];
//Filter - Create a new array by keeping the items that return true.

// const newNumber = numbers.filter((x) => {
//   return x > 2;
// });

var numbers = [3, 56, 2, 48, 5];
//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce((accumulator, currentNumber) => {
//   console.log(accumulator, currentNumber);
//   return accumulator + currentNumber;
// });

var numbers = [3, 56, 2, 48, 5];
//Find - find the first item that matches from an array.
// const newNumber = numbers.find((num) => {
//   return num > 10;
// });

var numbers = [3, 56, 2, 48, 5];
//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex((num) => {
//   return num > 10;
// });

console.log(newNumber);
