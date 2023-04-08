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
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${this.job}.`;
  }
};

console.log(dan.calcAge()); // method call is still necessary
console.log("Dan's age:", dan.age);

// Challenge: Contruct a string 'Denis is a 30-year old Developer' using a getSummary method

console.log(dan.getSummary());
