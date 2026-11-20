import { Router } from "express";

const router = Router();

const crimes = [];

router.get("/api/crimes", (req, res) => {
    res.send({ 
        data: {
            crimes,
            wantedStatus: req.session.wantedStatus
        } 
    });
});

router.post("/api/crimes", (req, res) => {
    if(!req.session.wantedStatus) {
        req.session.wantedStatus = 0;
    }
    req.session.wantedStatus += 1;

    crimes.push(req.body.crime);

    res.send({ 
        crime: req.body.crime,
        wantedStatus: req.session.wantedStatus
     });
});

export default router;