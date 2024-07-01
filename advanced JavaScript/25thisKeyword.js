"use strict";
this.table = "window table"; // this here means global scope

// function cleanTable1(soap) {
//   console.log(`cleaning ${this.table} using ${soap}`);
// }

// function cleanTable1(soap) {
//   // solution1 for accessing this inside a function
//   // let that = this;
//   const innerFunction = function (_soap) {
//     // console.log(`cleaning ${that.table} using ${_soap}`);
//     console.log(`cleaning ${this.table} using ${_soap}`);
//   };
//   // solution2 using call
//   // innerFunction.call(this, soap);
//   // solution2 using bind
//   innerFunction.bind(this)(soap);
// }

function cleanTable1(soap) {
  // solution3 using fat arrow function(fat arrow function uses this of the outer scope)
  const innerFunction = (_soap) => {
    console.log(`cleaning ${this.table} using ${soap}`);
  };
  innerFunction(soap);
}

// this.garage is public property
this.garage = {
  table: "garage table",
};
console.log(this.garage);

// private room
// let monusRoom = {
//   table: "monus table",
// };

// creating constructor(constructor is nothing but a function)
let createRoom = function (name) {
  this.table = `${name}s table`;
};

const sonusRoom = new createRoom("sonu");
const monusRoom = new createRoom("monu");
// console.log(this.monusRoom.table); monusRoom is private
console.log(monusRoom.table);
// this.garage.cleanTable();
// monusRoom.cleanTable();

cleanTable1.call(this, "some soap");
cleanTable1.call(this.garage, "garage soap");
cleanTable1.call(monusRoom, "monu soap");
cleanTable1.call(sonusRoom, "sonu soap");

// inside a function you cant use this keyword unless you use call, apply or bind

// instead of using call function and cleanTable1
createRoom.prototype.cleanTable = function (soap) {
  console.log(`cleaning ${this.table} using ${soap}`);
};

sonusRoom.cleanTable("hero soap");

// instead of using constructor function we can use classes

class createRoom1 {
  constructor(name) {
    this.table = `${name}s table`;
  }

  cleanTable(soap) {
    console.log(`cleaning ${this.table} using ${soap}`);
  }
}

const tinkusRoom = new createRoom1("tinku");
tinkusRoom.cleanTable("tinku soap");

// **********************************************************************************

class Student {
  static count = 0;
  constructor(name, age, ph_no, marks) {
    this.name = name;
    this.age = age;
    this.phone = ph_no;
    this.marks = marks;
    Student.count++;
  }

  isEligible() {
    if (this.marks > 40) console.log("Eligible");
    else console.log("Not Eligible");
  }
  isEligibleForPlacements(minMarks = 60) {
    return (minAge) => {
      if (this.marks >= minMarks && this.age >= minAge) return true;
      else return false;
    };
  }
  static studentCreated() {
    console.log(Student.count);
  }
}
const st1 = new Student("Sanket", 24, 7597, 80);
const st2 = new Student("pranay", 22, 7984, 30);
const st3 = new Student("chinmay", 21, 7597, 50);
const st4 = new Student("mayank", 23, 7984, 70);
st1.isEligible();
st2.isEligible();
Student.studentCreated(); //shows how many students created
const students = [st1, st2, st3, st4];
const company = {
  // definition of company criteria
  marks: 40,
  age: 22,
};
// below is iteration for all students to check eligible for placements
students.forEach((st) => {
  if (st.isEligibleForPlacements(company.marks)(company.age))
    console.log(st.name);
});

//this keyword
this.table = "window table";
this.garage = {
  table: "garage table",
  cleanTable: () => {
    console.log(`cleaning ${this.table}`);
  },
};

const cltbl = function () {
  console.log(this.table);
};
cltbl();
garage.cleanTable();
const clean = garage.cleanTable;
//here clean function will refer to global object
clean();
const bindclean = garage.cleanTable.bind(garage);
bindclean();

//this inside a function refers to global object
var x = 10;
function def() {
  var x = 5;
  // console.log(this.x);
  // console.log(x);
  const definside = () => {
    console.log(this.x);
    console.log(x);
  };
  definside();
}
def();
