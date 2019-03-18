class A {
  printCounter() {
    console.log('static counter=' + A.counter);
  }
}

A.counter = 25;

const a1 = new A();
a1.printCounter();
console.log('In the a1 instance counter=' + a1.counter);

const a2 = new A();
a2.printCounter();
console.log('In the a1 instance counter=' + a2.counter);
