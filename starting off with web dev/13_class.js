class Student {
  constructor(firstName, lastName, rollNo, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  minorOrmajor() {
    const currDate = new Date();
    let age = currDate.getFullYear() - this.dob.getFullYear();

    if (age >= 18) console.log("major");
    else console.log("minor");
  }
}

const s1 = new Student("manthan", "panwar", "11-17-2007");
const s2 = new Student("sanket", "panwar", "02-27-1998");

s1.printFullName();
s1.minorOrmajor();
s2.printFullName();
s2.minorOrmajor();
