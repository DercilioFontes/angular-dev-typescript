const Tax = {
  taxableIncome: 0,
  get income() {
    return this.taxableIncome;
  },
  set income(value) {
    this.taxableIncome = value;
  },
  calculateTax() {
    return this.taxableIncome * 0.13;
  }
};

Tax.income = 50000;
console.log('Income: ' + Tax.income);
console.log(`For the income ${Tax.income} your tax is ${Tax.calculateTax()}`);
