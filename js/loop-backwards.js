// Loop backwards

const currentYear = new Date().getFullYear();
const birthYear = 1993;

const dan = [
  "Denis",
  "Obua",
  currentYear - birthYear,
  "Software Developer",
  ["Peter", "Geoffrey", "Richard"],
  true
];

for (let i = dan.length - 1; i >= 0; i--) {
  console.log(i, dan[i]);
}
