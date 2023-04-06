// Array methods

const friends = ["Geoffrey", "Peter", "Richard"];
let numberOfFriends = friends.length;
console.log(`${numberOfFriends} friends:`, friends);

// Adding element(s) to the end of an array
numberOfFriends = friends.push("Roy"); // push method returns the array length
console.log(`${numberOfFriends} friends:`, friends);

// Adding element(s) to the beginning of an array
numberOfFriends = friends.unshift("Morish");
console.log(`${numberOfFriends} friends:`, friends);

// Removing the last element of an array
let lostFriend = friends.pop();
numberOfFriends = friends.length;
console.log(`I just lost ${lostFriend}`);
console.log(`${numberOfFriends} friends:`, friends);