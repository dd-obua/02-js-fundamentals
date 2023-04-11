// Calculating the average of an array of numbers

const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

const numArr = [1, 2, 3, 4];
const average = calcAverage(numArr).toFixed(2);
console.log("Array:", numArr, `Average: ${average}`);
