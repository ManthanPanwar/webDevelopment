// constructor function
function person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

person.prototype.getFullName = function () {
  return `full name is: ${this.firstName} ${this.lastName}`;
};

const p1 = new person("manthan", "panwar", "11-17-2003");
const p2 = new person("sanket", "panwar", "02-27-1998");

console.log(p2.dob.getFullYear());
console.log(p2.getBirthYear());
console.log(p1.getFullName());

// exercise
function student(firstName, lastName, age, sex) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.sex = sex;

  this.printFullName = function () {
    console.log(`${firstName} ${lastName}`);
  };
}

student.prototype.isEligible = function () {
  if (this.age >= 18) return "eligible";
  else return "not eligble";
};

const s1 = new student("manthan", "panwar", 21, "M");
const s2 = new student("shivani", "singh", 10, "F");

console.log(s1.isEligible());
console.log(s2.isEligible());
