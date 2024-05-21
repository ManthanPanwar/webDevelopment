class User {
  static userCount = 0;
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    User.userCount++;
  }

  static printNumberOfUsers() {
    console.log(`There are ${User.userCount} users.`);
  }

  register() {
    console.log(`${this.userName} is now registered.`);
  }
}

const u1 = new User("manthan", "manthandpr@gmail.com", "1234");
const u2 = new User("manthan", "manthandpr@gmail.com", "1234");
const u3 = new User("manthan", "manthandpr@gmail.com", "1234");

User.printNumberOfUsers();
