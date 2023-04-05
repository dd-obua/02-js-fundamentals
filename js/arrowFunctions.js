// Arrow function, a special form of function expression

const currentYear = 2023;
// A simple arrow function
const calculateAge3 = (birthYear) => currentYear - birthYear;

const age3 = calculateAge3(1993);
console.log("Age:", age3);

// A code block is required here
const retirementAge = 60;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = currentYear - birthYear;
  const yearsRemaining = retirementAge - age;
  return `${firstName} retires in ${yearsRemaining} years.`;
};

console.log(yearsUntilRetirement(1993, "Denis"));
console.log(yearsUntilRetirement(1992, "Stella"));
console.log(yearsUntilRetirement(1990, "Joe"));
  