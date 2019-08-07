interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  ssn?: string;
}

interface IPayable {
  increasePay(percent: number): boolean;
}

class Person {
  // public firstName: string;
  // public lastName: string;
  // public age: number;
  // private _ssn: string;

  // constructor(public config: iPerson) {
  //   // this.firstName = firstName;
  //   // this.lastName = lastName;
  //   // this.age = age;
  //   // this._ssn = ssn;
  // }

  // fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  static className() {
    return 'Person';
  }
}

class Employee extends Person implements IPayable{
  increasePay(percent: number): boolean {
    console.log(`Increasing salary by ${percent}`);
    return true;
  }
  static className() {
    return 'Employee';
  }
}

class Contractor implements IPayable {
  increaseCap:number = 20;

  increasePay(percent: number): boolean{
    if(percent < this.increaseCap){
      console.log(`Increasing hourly rate by ${percent}`);
      return true;
    } else {
      console.log(`Sorry, the increase cap for contractors is ${this.increaseCap}`);
      return false;
    }
  }
}

// const p = new Person('John', 'Smith', 30, '123-90-4567');
// let aPerson: IPerson = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 29
// }

// let p = new Person(aPerson)

// console.log(`Last name: ${p.config.lastName} Age: ${p.config.age}`);
// // console.log(p.fullName());
// console.log(Person.className());

// const e = new Employee('Carlos', 'Marcio', 34, '123-345-7892');

// console.log(e.fullName());
// console.log(Employee.className());

const workers: IPayable[] = [];
workers[0] = new Employee();
workers[1] = new Contractor();
workers.forEach(worker => worker.increasePay(30))