// Comparing BMI
markObj = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  }
};

const bmiMark = markObj.calcBMI().toFixed(1);

johnObj = {
  firstName: "John",
  lastName: "Smith",
  mass: 93,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  }
};

const bmiJohn = johnObj.calcBMI().toFixed(1);

if (bmiJohn > bmiMark) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
} else {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
}
