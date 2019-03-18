function calcTaxES5(income, state) {
  state = state || 'Florida';

  console.log(
    'ES5. Calculating tax for the resident of ' +
      state +
      ' with the income ' +
      income
  );
}

calcTaxES5(50000);

function calcTaxES6(income, state = 'Florida') {
  console.log(
    'ES5. Calculating tax for the resident of ' +
      state +
      ' with the income ' +
      income
  );
}

calcTaxES6(40000);

function getDefaultState() {
  return 'Florida';
}

function calcTaxES6_2(income, state = getDefaultState()) {
  console.log(
    'ES5. Calculating tax for the resident of ' +
      state +
      ' with the income ' +
      income
  );
}

calcTaxES6_2(30000);