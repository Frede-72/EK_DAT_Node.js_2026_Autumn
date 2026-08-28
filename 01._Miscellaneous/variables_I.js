// Node REPL (Read-evaluate-print loop)

// Type Coercion

// Rule: Use strict equality checks: ===  or   !==

// node <filename>

// console.log("Adam");

// Rule: Use const whenever possible, otherwise use let

const myFavoriteNumber = 213;

// const means that it is constant in the assignment

const person = {
    // key-value pair
    name: "Amin"
};

person.age = 123;

// delete person.name;

// const person2;

console.log(person);

const things = ["mouse"];

things.push("car");

// things.pop();

// Rule: Use comma in console.log 
// because if we use + (concatenate) we might coerce and change the values

console.log(things[0], things[1]);

// Data types in JavaScript
// Strings, Boolean, Number, BigInt, null, undefined, Object, Symbol

const greetingOne = "Hej med dig, '''''ven'";
const greetingTwo = 'Hej med dig, """"""""""ven"';
const greetingThree = `Hej, med 'dig', "${person.name}"


// Benefit: Multi-line
Booh
`;

console.log(greetingOne);
console.log(greetingTwo);
console.log(greetingThree);