import express from "express";
const app = express();

app.use(express.static("public"));

import pagesRouter from "./routers/pagesRouter.js";
import plantsRouter from "./routers/plantsRouter.js";

app.use(pagesRouter, plantsRouter);


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