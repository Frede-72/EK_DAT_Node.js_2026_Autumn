const express = require("express");
const app = express();

// const app = require("express")();

// task Create a route for the endpoint / returns a greeting
app.get('/', (req, res) => {
    res.send({ data: "Hello" });
});

// callback function = a function reference provided as an argument with the posibility of being called later

// functions as first-class citizens = can do with functions what can be done with other data types


     //endpoint //callback function
app.get('/e', (req, res) => {
    res.send({ data: "talk" });

});
// this = route


// How can i send data in a GET request
// Path variable /users/1
// query parameters: ?userId=1&likesProgramming=true

// create a /beers route

app.get('/beers/:beerType/:amount', (req, res) => {

    console.log(req.params.beerType);
    res.send({ data: `you ordered ${req.params.amount} of ${req.params.beerType}` });
});

app.get('/bars/forgottenItems', (req, res) => {
    console.log(req.query);
    res.send({ data: req.query });
});

app.listen(8080);