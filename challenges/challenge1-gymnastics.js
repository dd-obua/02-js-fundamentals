const calcAverage = (x, y, z) => (x + y + z) / 3;

// Given Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);
console.log();

// Given Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(
  `Test data 2: Dolphins: ${averageDolphins}, Koalas: ${averageKoalas}`
);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    return `Dolphins win (${averageDolphins} vs. ${averageKoalas}).`;
  } else if (averageKoalas >= 2 * averageDolphins) {
    return `Koalas win (${averageKoalas} vs. ${averageDolphins}).`;
  } else {
    return "No team wins!";
  }
};

console.log(checkWinner(averageDolphins, averageKoalas));
