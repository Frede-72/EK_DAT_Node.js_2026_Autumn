import { Router } from "express";

const router = Router();

import { fetchAllPlants , fetchPlant } from "../util/fetchPlants.js";

router.get("/api/plants", async (req,res) => {
    res.send({ data: await fetchAllPlants() });
});

router.get("/api/plants/:plantSlug" , async (req,res) => {
    res.send({ data: await fetchPlant(req.params.plantSlug)});
});

export default router;