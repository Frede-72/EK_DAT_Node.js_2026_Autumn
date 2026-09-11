// .map .filter .reduce .find .findIndex .indexOf ( .forEach )

// Rule 1: Use loop methods in JavaScript
// Rule 2: Don't use for loops unless finger counting
// Rule 3: Use map if you need data after, otherwise forEach


// map  returns a new list of same size 1:1 

const numbers = [1,2,3,4,5];

// task: double the numbers

const doubleNumber = numbers.map((number) => number * 2);
console.log(doubleNumber);

numbersIterated = numbers.map( (value, index, array) => console.log(value, index, array));

// task boost Lesotto gdp with 500

const countries = [
    { name: "Lesotho", gdp: 530 },
    { name: "Papa New Guinea", gdp: 1025 },
    { name: "Saint Vincent and the Grenadines", gdp: 1200 },
];

// const countriesWithGDPUpdated = countries.map((country) => {
//     if (country.name === "Lesotho") {
//        country.gdp += 500
//     } 
//     return country
// });

const countriesWithGDPUpdated = countries.map((country) => ({
        name: country.name,
        gdp: country.name === "Lesotho" ? country.gdp + 500 : country.gdp
    }));

console.log(countriesWithGDPUpdated);

//task filter out countries where gdp is below 1000

const countriesAbove1000GDP = countries.filter((country) => country.gdp > 1000);

console.log(countriesAbove1000GDP);