const currentYear = new Date().getFullYear();

const dan = {
  firstName: "Denis",
  lastName: "Obua",
  birthYear: 1993,
  job: "Developer",
  friends: ["Geoffrey", "Peter", "Richard"],
  hasDriversLicence: false,

  calcAge: function () {
    this.age = currentYear - this.birthYear;
    return this.age;
  }
};

console.log(dan.calcAge()); // method call is still necessary
console.log("Dan's age:", dan.age);
