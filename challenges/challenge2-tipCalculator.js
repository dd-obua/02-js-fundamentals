// Tip calculator challenge

const bill = 100;

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const tip = calcTip(bill);
console.log(`Bill: $100, Tip: $${tip}`);

const bills = [125, 555, 44];
console.log("Bills:", bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("Tips:", tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("Total:", total);
