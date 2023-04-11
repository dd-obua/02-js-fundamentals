//

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Weight lifting repetion ${rep}`);
}

console.log();

// Looping through an array
const dan = [
  "Denis",
  "Obua",
  2013 - 1993,
  "Developer",
  ["Peter", "Geoffrey", "Richard"],
  true
];

const types = [];

for (let i = 0; i < dan.length; i++) {
  console.log(dan[i], typeof dan[i]);

  // Filling  types array
  // types[i] = typeof dan[i];

  types.push(typeof dan[i]);
}

console.log();

console.log(types);

console.log();

// Computing ages given an array of birth years
const currentYear = new Date().getFullYear();
const birthYears = [1990, 1991, 1992, 1993];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(currentYear - birthYears[i]);
}
console.log(ages);
