let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let array3 = [...array1, ...array2];

console.log('array3: ', array3);
// array3:  [ 1, 2, 3, 4, 5, 6 ]

array1.push(...array2);

console.log('array1 push array2: ', array1);
// array1 push array2:  [ 1, 2, 3, 4, 5, 6 ]

const maxValue = Math.max(...array3);
console.log(maxValue); // 6


/* Clone object */

// Clone with Object.assign()
const myObject = { name: 'Mary', lastName: 'Smith' };
const clone = Object.assign({}, myObject);
console.log(clone);

// Clone with modifying the "lastName" property
const cloneModified = Object.assign({}, myObject, { lastName: 'Lee' });
console.log(cloneModified);

// Clone with spread
const cloneSpread = { ...myObject };
console.log('cloneSpread: ', cloneSpread);

// Clone with modifying the "lastName"
const cloneSpreadModified = { ...myObject, lastName: 'Lee' };
console.log('cloneSpreadModified: ', cloneSpreadModified);
