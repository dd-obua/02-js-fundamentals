const retirementAge = 60;
const currentYear = new Date().getFullYear();

const calculateAge = function (currentYear, birthYear) {
  return currentYear - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calculateAge(currentYear, birthYear);
  remainingYears = retirementAge - age;

  if (remainingYears === 0) {
    return `${firstName} retires this year.`;
  } else if (remainingYears > 0) {
    return `${firstName} retires in ${remainingYears} years.`;
  } else {
    return `${firstName} retired already.`;
  }
};

console.log(yearsUntilRetirement(1993, "Denis"));
console.log(yearsUntilRetirement(1992, "Stella"));
console.log(yearsUntilRetirement(1990, "Joseph"));
console.log(yearsUntilRetirement(1966, "Jasinta"));
console.log(yearsUntilRetirement(1963, "Richard"));
console.log(yearsUntilRetirement(1950, "Fred"));
