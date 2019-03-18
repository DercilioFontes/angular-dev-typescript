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

getCustomers()
  .then(cust => console.log(cust))
  .catch(err => console.log(err));
console.log('Invoked getCustomers. Waiting for results');
