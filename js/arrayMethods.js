// Array methods

const friends = ["Geoffrey", "Peter", "Richard"];
let numberOfFriends = friends.length;
console.log(`I have ${numberOfFriends} friends:`, friends);

// Adding element(s) to the end of an array
numberOfFriends = friends.push("Roy"); // push method returns the current array length
console.log(`I have ${numberOfFriends} friends:`, friends);

// Adding element(s) to the beginning of an array
numberOfFriends = friends.unshift("Morish"); // unshift method returns the current array length
console.log(`I have ${numberOfFriends} friends:`, friends);

// Removing the first array element
let lostFriend = friends.shift(); // shift method returns the element that was removed
console.log(`I just lost ${lostFriend}.`);
numberOfFriends = friends.length;
console.log(`I have ${numberOfFriends} friends:`, friends);

// Removing the last element of an array
lostFriend = friends.pop(); // pop method returns the element that was removed
numberOfFriends = friends.length;
console.log(`I just lost ${lostFriend}.`);
console.log(`I have ${numberOfFriends} friends:`, friends);

// Identifying position of an array element
let position = friends.indexOf("Richard");
console.log(`Richard's position: ${position}`);

// Checking if something is exists in the array
console.log(`Peter is my friend: ${friends.includes("Peter")}`); // includes method does strict comparision
console.log(`Edwin is my friend: ${friends.includes("Edwin")}`);
