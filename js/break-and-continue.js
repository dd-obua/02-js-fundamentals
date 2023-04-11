// break and continue statements

// continue statement - coninue skips the current iteration
const dan = [
  "Denis",
  "Obua",
  2013 - 1993,
  "Developer",
  ["Peter", "Geoffrey", "Richard"],
  true
];

// Read only string values from an array
console.log("--- Only strings ---");
for (let i = 0; i < dan.length; i++) {
  if (typeof dan[i] !== "string") continue;

  console.log(`${typeof dan[i]}: ${dan[i]}`);
}
