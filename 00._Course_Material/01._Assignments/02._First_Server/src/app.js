const express = require('express');
const app = express();

const duck = { name:"Duck", id: 1 };
const bird = { name:"Bird", id: 2 };
const other_Animal = { name:"Other animal", id: 3 };



const animals = [duck,bird,other_Animal]

app.get('/', (req, res) => {
    res.send({ data: "WOW Animals!" });
});

app.get('/animals', (req, res) => {
    
    res.send({ data: animals});
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

// 2xx OK
// 3xx Redirect
// 4xx Client-side error
// 5xx Server-side error

app.listen(8080);