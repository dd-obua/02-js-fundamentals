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

const ageDan = dan.calcAge();
console.log("Dan's age:", ageDan);
