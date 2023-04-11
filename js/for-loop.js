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

  types[i] = typeof dan[i];
}

console.log();

console.log(types);
