const currentYear = new Date().getFullYear();

const dan = {
  firstName: "Denis",
  lastName: "Obua",
  birthYear: 1993,
  job: "Developer",
  friends: ["Geoffrey", "Peter", "Richard"],
  hasDriversLicence: false,

  calcAge: function (birthYear) {
    return currentYear - birthYear;
  }
};

const ageDan = dan.calcAge(1993);
console.log("Dan's age:", ageDan);

const ageJoe = dan.calcAge(1990);
console.log("Dan's age:", ageJoe);
