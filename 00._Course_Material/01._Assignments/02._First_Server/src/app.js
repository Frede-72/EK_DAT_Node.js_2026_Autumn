const express = require('express');
const app = express();

app.use(express.json());

const duck = { name: "Duck", id: 1 };
const bird = { name: "Bird", id: 2 };
const other_Animal = { name: "Other animal", id: 3 };



const animals = [ duck,bird,other_Animal ]

app.get('/', (req, res) => {
    res.send({ data: "WOW Animals!" });
});

app.get('/animals', (req, res) => {
    res.send({ data: animals });
});

app.get('/animals/:id', (req, res) => {
    const provideId = Number(req.params.id);
    const foundAnimal = animals.find((animal) => animal.id === provideId);

    if (!foundAnimal) {
        res.status(404).send({ data: `No animal found by id ${provideId}` });
    } else {
        res.send({ data: `${foundAnimal.name} WOW an animal. Try another animal` });
    }

});

app.post('/animals' , (req, res) => {
    const name = req.body.name;

    if(!name){
        res.status(400).send({ data: `No name provided` });
        return;
    }

    name.trim;
    if(!name){
        res.status(400).send({ data: `No name provided` });
        return;
    }

    const newAnimal = { name: name, id: Math.max(...animals.map(animal => animal.id)) + 1 };
    const found = animals.find( (animal) => animal.name === `${name}` );

    if(found === undefined) {
        animals.push(newAnimal);
        res.send({ data: `${req.body}` });
    } else if( found.name !== undefined ){
        res.status(400).send({ data: `Animal by name ${found.name} already exist` });
    }

})

// 2xx OK
// 3xx Redirect
// 4xx Client-side error
// 5xx Server-side error

app.listen(8080);