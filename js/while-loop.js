let rep = 1;

while (rep <= 10) {
  console.log(`Lift weight repetition ${rep}`);
  rep++;
}

console.log();

// Roll dice
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);

  dice = Math.trunc(Math.random() * 6) + 1;
}

console.log(`I got a ${dice}!`);
