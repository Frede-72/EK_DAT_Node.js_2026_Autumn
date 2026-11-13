import { Router } from "express";

const router = Router();

/*
authentication: proving you are who you are
    authorization: proving you have permission to access certain resources
*/

function isAdmin(req, res, next) {
    const isAdmin = true;
    if(isAdmin){
        next();
    }
    res.status(403).send();
}

router.get("/auth/dashboard", isAdmin, (req, res) => {
    res.send({ data: "Secret dashboard" });
});

export default router;