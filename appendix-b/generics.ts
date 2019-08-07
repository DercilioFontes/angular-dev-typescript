class Person2 {
  name: string;
}

class Employee2 extends Person2 {
  department: number;
}

class Animal {
  breed: string;
}

let workers2: Array<Person2> = [];

workers2[0] = new Person2();
workers2[1] = new Employee2();
workers2[2] = new Animal();
