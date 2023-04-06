const friends = ["Peter", "Geoffrey", "Richard"];
console.log(friends);
console.log(friends[1]);

const birthYears = new Array(1990, 1992, 1993);
console.log(birthYears);
console.log("Element at index 0:", birthYears[0]);
console.log("Element at index 2:", birthYears[2]);

console.log("Array length:", friends.length);
console.log("Last array element:", friends[friends.length - 1]); // returns the last element of the array

friends[2] = "Roy";

// Arrays with elements of different data types
const firstName = "Denis";
const denis = [firstName, "Obua", 1993, "Software engineer (Web developer)"];
console.log(denis);

// Exercise
const currentYear = new Date().getFullYear();

const calcAge = function (birthYear) {
  return currentYear - birthYear;
};

const bthYrs = [1990, 1992, 1993, 1996, 1998, 2000];
const age1 = calcAge(bthYrs[0]);
const age2 = calcAge(bthYrs[1]);
const age3 = calcAge(bthYrs[2]);
const age4 = calcAge(bthYrs[3]);
const age5 = calcAge(bthYrs[4]);

const ages = [
  calcAge(bthYrs[0]),
  calcAge(bthYrs[1]),
  calcAge(bthYrs[2]),
  calcAge(bthYrs[3]),
  calcAge(bthYrs[4]),
];

for (let i = 0; i < ages.length; i++) {
  console.log(`${bthYrs[i]}: ${ages[i]}`);
}
