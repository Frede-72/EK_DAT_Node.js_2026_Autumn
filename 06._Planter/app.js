import express from "express";
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded());

import pagesRouter from "./routers/pagesRouter.js";
import plantsRouter from "./routers/plantsRouter.js";
import contactRouter from "./routers/contactRouter.js";

app.use(pagesRouter, plantsRouter, contactRouter);


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