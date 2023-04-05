const currentYear = 2023;

// Function declaration
function calculateAge1(birthYear) {
  return currentYear - birthYear;
}

const age1 = calculateAge1(1993);
console.log("Age:", age1);

// Function expression
const calculateAge2 = function (birthYear) {
  return currentYear - birthYear;
};
const age2 = calculateAge2(1993);
console.log("Age:", age2);
