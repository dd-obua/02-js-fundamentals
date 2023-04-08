const currentYear = new Date().getFullYear();

const dan = {
  firstName: "Denis",
  lastName: "Obua",
  birthYear: 1993,
  job: "Developer",
  friends: ["Geoffrey", "Peter", "Richard"],
  hasDriversLicence: false,

  calcAge: function () {
    return currentYear - this.birthYear;
  }
};

const age = dan.calcAge(1993);
console.log("Dan's age:", age);
