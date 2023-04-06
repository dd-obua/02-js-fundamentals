// Tip calculator challenge

const bill = 100;

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const tip = calcTip(bill);
console.log(`Bill: $100, Tip: $${tip}`);

const bills = [125, 555, 44];
console.log(bills);
