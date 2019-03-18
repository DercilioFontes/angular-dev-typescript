function getCustomers() {
  return new Promise(function(resolve, reject) {
    console.log('Getting customers');
    // Emulate an async server call here
    setTimeout(function() {
      const success = true;
      if (success) {
        resolve('John Smith');
      } else {
        reject("Can't get customers");
      }
    }, 1000);
  });
}

function getOrders(customer) {
  return new Promise(function(resolve, reject) {
    // Emulate an async server call here
    setTimeout(function() {
      const success = true;
      if (success) {
        resolve(`Found the order 123 for ${customer}`);
      } else {
        reject("Can't get orders");
      }
    }, 1000);
  });
}

getCustomers()
  .then(cust => {
    console.log(cust);
    return cust;
  })
  .then(cust => getOrders(cust))
  .then(order => console.log(order))
  .catch(err => console.log(err));
console.log('Chained getCustomers and getOrders. Waiting for results');
