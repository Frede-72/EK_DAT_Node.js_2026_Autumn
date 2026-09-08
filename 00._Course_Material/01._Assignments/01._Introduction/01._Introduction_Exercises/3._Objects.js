// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

// Log the message

console.log(greetings.message);

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age.

const me = { name: "Frederik", age: 24 };

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = {};
stackOverflow.isAllowed = true;
console.log(stackOverflow.isAllowed);

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute."

delete thisSong.description;
thisSong.about = "Just a tribute";

console.log(thisSong);

// --------------------------------------
