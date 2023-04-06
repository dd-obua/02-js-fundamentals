const calcAverage = (x, y, z) => (x + y + z) / 3;

// Given Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

const averageDolphins = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    return `Dolphins win (${averageDolphins} vs. ${averageKoalas})`;
  } else if (averageKoalas >= 2 * averageDolphins) {
    return `Koalas win (${averageKoalas} vs. ${averageDolphins}13)`;
  } else {
    return "No team wins!";
  }
};

console.log(checkWinner(averageDolphins, averageKoalas));
