const express = require("express");
const app = express();

app.use(express.static("public"));

const fruitPackage = require("./util/fruitUtils.js");
console.log(fruitPackage.fruits, fruitPackage.slogan);


app.get("/" , (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/index.html");
});

app.get("/fruits" , (req, res) => {
    res.sendFile(__dirname + "/public/fruits/fruits.html");
})

let counter = 0;

app.get("/api/counter" , (req, res) =>{
    res.send({ data: ++counter });
});

app.listen(8080, (error) => {
    if (error){
        console.log(error)
        return;
    }
    console.log("Server runnning on port:", 8080);
});