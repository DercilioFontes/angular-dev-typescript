const numbersArray = [1, 2, 3, 4];
numbersArray.description = 'four numbers';

numbersArray.forEach(n => console.log(n));
/*
1
2
3
4
*/

for (const key in numbersArray) {
  console.log(key);
}
/*
0
1
2
3
description
*/

for (const key in numbersArray) {
  console.log(numbersArray[key]);
}
/*
1
2
3
4
four numbers
*/

for (const iterator of numbersArray) {
  console.log(iterator);
}
/*
1
2
3
4
*/

for (const iterator of numbersArray) {
  if (iterator > 2) break;
  console.log(iterator);
}
/*
1
2
*/

for (const char of 'John') {
  console.log(char);
}
/*
J
o
h
n
*/