import express from "express";
const app = express();



const PORT = 8080;

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("Running in port: ", PORT);
});