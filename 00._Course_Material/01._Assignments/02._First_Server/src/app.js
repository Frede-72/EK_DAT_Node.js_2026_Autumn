const express = require('express');
const app = express();

const duck = { name:"Duck", id: 0 };
const bird = { name:"Bird", id: 1 };
const other_Animal = { name:"Other animal", id: 2 };



const animals = [duck,bird,other_Animal]

app.get('/', (req, res) => {
    res.send({ data: "WOW Animals!" });
});

app.get('/animals', (req, res) => {
    const animalNameList = []
    animals.forEach(animal => animalNameList.push(animal.name));
    res.send({ data: `All animals fall into one(or more) of these 3 categories ${ animalNameList }`});
});

app.get('/animals/:id', (req, res) => {
    res.send({ data: `${animals[req.params.id].name} WOW this is(maybe) an animal. Try another animal` });
});

app.listen(8080);