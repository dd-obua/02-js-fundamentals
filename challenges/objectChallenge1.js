// Comparing BMI

const markObj = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const johnObj = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const bmiMark = markObj.calcBMI().toFixed(1);
const bmiJohn = johnObj.calcBMI().toFixed(1);

if (johnObj.bmi > markObj.bmi) {
  console.log(
    `${johnObj.firstName}'s BMI (${bmiJohn}) is higher than ${markObj.firstName}'s (${bmiMark})!`
  );
} else {
  console.log(
    `${markObj.firstName}'s BMI (${bmiMark}) is higher than ${johnObj.firstName}'s (${bmiJohn})!`
  );
}
