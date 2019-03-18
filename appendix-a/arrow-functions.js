const myArray = [1, 2, 3, 4, 5];

console.log(
  'The sum of myArray elements is ' + myArray.reduce((a, b) => a + b)
);

console.log(
  'The even numbers in myArray are ' + myArray.filter(value => value % 2 === 0)
);
