function calcTax(
  income: number,
  state: string = 'NY',
  dependents?: number
): number {
  let deduction: number;

  if (dependents) {
    deduction = dependents * 500;
  } else {
    deduction = 0;
  }

  if (state === 'NY') {
    return income * 0.06 - deduction;
  } else if (state === 'NJ') {
    return income * 0.05 - deduction;
  }
}

let tax: number = calcTax(50000, 'NJ', 3);
console.log(`Your tax is ${tax}`);

tax = calcTax(50000);
console.log(`Your tax is ${tax}`);
