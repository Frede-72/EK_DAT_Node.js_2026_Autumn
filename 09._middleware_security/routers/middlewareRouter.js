import { Router } from "express";

const router = Router();

router.use("/room", ipLogger);

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

function butler(req, res, next) {
    if(req.query.name?.toLowerCase() === "Steve") {
        return res.send({ data: "Steve not allowed"});
    }
    // Add things to req, 
    req.coatCondition = "off";
    next();
}

function doorway(req, res, next) {
    console.log("come on in...");
    next();
}


router.get("/room", butler, doorway, (req, res, next) => {
    console.log("You are in the hallway, coat is" , req.coatCondition);
    next();
}, (req, res, next) => {
    console.log("r1")
    // res.send({ data: "You are in room 1" })
    next();
});

router.get("/room", (req, res, next) => {
    res.send({ data: "You are in room 2" })
    // next();
});

export default router;