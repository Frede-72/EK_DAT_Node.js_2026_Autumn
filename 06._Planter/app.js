import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/" , (req, res) => {
    res.sendFile(path.resolve("public/frontpage/index.html"));
});

app.get("/about" , (req, res) => {
    res.sendFile(path.resolve("public/about/about.html"))
})

// short-circuit operator || all falsy
// nullish coalesscence ?? for null/undefined

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("Running in port: ", PORT);
});