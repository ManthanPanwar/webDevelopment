// inside curly brackets is called object

const Person = {
  firstName: "Manthan",
  lastName: "Panwar",
  age: 21,
  hobbies: ["sports", "guitar"],
  address: {
    street: 5,
    colony: "park",
    state: "rajasthan",
  },
};

console.log(Person.firstName, Person.lastName);

console.log(Person.hobbies[1]);

console.log(Person.address.state);

//Destructuring
const {
  firstName,
  lastName,
  address: { colony },
} = Person;
console.log(firstName, lastName, colony);

// adding into the object
Person.email = "manthandpr@gmail.com";
console.log(Person);

// Array of objects
const todos = [
  {
    id: 1,
    text: "txt1",
    isComplete: true,
  },
  {
    id: 2,
    text: "txt2",
    isComplete: true,
  },
  {
    id: 3,
    text: "txt3",
    isComplete: false,
  },
];

console.log(todos);
console.log(todos[1].text);

// to convert into JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
