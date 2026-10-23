import { Router } from "express";
// import express from 'express';
// const Router = express.Router;
const router = Router();

import { frontpagePage, aboutPage } from "../templatingEngine/pages.js";

router.get("/" , (req, res) => {
    res.send(frontpagePage);
    // res.sendFile(path.resolve("public/pages/frontpage/index.html"));
});

router.get("/about" , (req, res) => {
    res.send(aboutPage);
    // res.sendFile(path.resolve("public/pages/about/about.html"))
});

export default router;