let [name1, name2] = ['Smith', 'Clinton'];
console.log(`name1 = ${name1}, name2 = ${name2}`);

function getCustomers() {
  return ['Carlos', , , 'Marcio'];
}

let [firstCustomer, , , lastCustomer] = getCustomers();

console.log(
  `The first customer is ${firstCustomer} and the last one is ${lastCustomer}`
);
