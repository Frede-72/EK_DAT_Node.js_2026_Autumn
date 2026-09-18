const express = require("express")
const app = express();

const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

const days = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

// console.log(new Date());

// console.log(Date());

// console.log(Date.now());


app.get("/months/v1" , (req, res) => {
    const currentMonth = months[new Date().getMonth()];

    res.send({ data: currentMonth });
});

app.get("/months/v2" , (req, res) => {
    const currentMonth = new Date().toLocaleDateString("en-uk", { month: "long" });

    res.send({ data: currentMonth });
});

app.get("/days/v1" , (req, res) => {
    const currentDay = days[new Date().getDay()];
    
    res.send({ data: currentDay });
})

app.get("/days/v2" , (req, res) => {
    const currentDay = new Date().toLocaleDateString("en-uk" , { weekday: "long" })

    res.send({ data: currentDay });
})

app.listen(8080, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port:", 8080);
});