const currentYear = new Date().getFullYear();
const birthYear = 1993;

const denisArray = [
  "Denis",
  "Obua",
  currentYear - birthYear,
  "Software Engineer / Web Developer",
  ["Geoffrey", "Peter", "Richard"]
];

const denisObject = {
  firstName: "Denis",
  lastName: "Obua",
  age: currentYear - birthYear,
  job: "Software Engineer (Web Developer)",
  friends: ["Geoffrey", "Peter", "Richard"]
};
console.log(denisObject);
console.log(denisObject.lastName, denisObject["age"]);

const nameKey = "Name";
console.log(denisObject["first" + nameKey], denisObject[`last${nameKey}`]);

const interestedIn = prompt(
  "What would you like to know about Denis? (Choose firstName, lastName, age, job, or friends)."
);

if (denisObject[interestedIn]) {
  console.log(denisObject[interestedIn]);
} else {
  console.log(
    "Wrong selection! What would you like to know about Denis? (Choose firstName, lastName, age, job, or friends)."
  );
}
