/*
Date object:
.getMonth(): gives back the month from 0 to 11.
.getFullYear(): gives back the year.
.getDate(): gives back the day number from 1 to 31.
.getDay(): gives back the day of the week from 0 to 6.
.getHours(): gives back the hour from 0 to 23.
.getTime(): gives the number of milliseconds since 1st january 1970 to the date you have given, and we use it to compare 2 dates.
example birthday1.getTime() == birthday2.getTime() is used to check whether they are same or not.
*/

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

class Member extends User {
  constructor(userName, email, password, memberPackage) {
    super(userName, email, password); // getting the properties from User class
    this.memberPackage = memberPackage;
    this.membershipActivateTillDate = new Date(
      2023,
      2,
      3 /*yy,MM,dd,hh,mm,ss*/
    );
  }

  getPackage() {
    console.log(
      `${this.userName} is subscribed to the ${this.memberPackage} package.`
    );
  }

  renewMembership() {
    if (this.memberPackage === "MONTHLYPACKAGE")
      this.membershipActivateTillDate.setMonth(
        this.membershipActivateTillDate.getMonth() + 1
      );
    else if (this.memberPackage === "YEARLYPACKAGE")
      this.membershipActivateTillDate.setFullYear(
        this.membershipActivateTillDate.getFullYear() + 1
      );
  }
}

const mike = new Member("mike", "boy@gmail.com", "1234", "YEARLYPACKAGE");
const manthan = new Member(
  "manthan",
  "manthan@gmail.com",
  "12345",
  "MONTHLYPACKAGE"
);

mike.register();
mike.getPackage();
console.log(mike.membershipActivateTillDate.getFullYear());
mike.renewMembership();
console.log(mike.membershipActivateTillDate.getFullYear());
console.log(manthan.membershipActivateTillDate.getMonth());
manthan.renewMembership();
console.log(manthan.membershipActivateTillDate.getMonth());
