function calcTax(state, income, dependents) {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    }
    else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}
var tax = calcTax('NJ', 50000, 'two');
console.log(tax);
