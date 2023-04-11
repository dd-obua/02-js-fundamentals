// Comparing BMI

const markObj = {
  firstName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  }
};

const bmiMark = markObj.calcBMI().toFixed(1);

johnObj = {
  firstName: "John Smith",
  mass: 93,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  }
};

const bmiJohn = johnObj.calcBMI().toFixed(1);

if (bmiJohn > bmiMark) {
  console.log(
    `John Smith's BMI (${bmiJohn}) is higher than Mark Miller's (${bmiMark})!`
  );
} else {
  console.log(
    `Mark Miller's BMI (${bmiMark}) is higher than John Smith's (${bmiJohn})!`
  );
}
