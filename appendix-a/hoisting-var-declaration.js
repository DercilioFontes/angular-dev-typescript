function foo() {
  for (var i = 0; i < 10; i++) {}
  console.log('i=' + i);
}

foo();

var customer = "Joe";
(function () {
    console.log("The name of the customer inside the function is "  + customer);
    if(true) {
        var customer = "Mary";
    }
})();
console.log("The name of the customer outside the function is " + customer);


doSomething();
doSomething2();

function doSomething() {
    console.log("I'm doing something");
}

var doSomething2 = function() {
    console.log("I'm doing something 2");
}
