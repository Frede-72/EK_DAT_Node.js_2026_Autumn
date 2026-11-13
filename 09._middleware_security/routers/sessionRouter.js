import { Router } from "express";

const router = Router();

router.get("/banhmi/order", (req, res) => {
    console.log("amount:", req.session.banhmiAmount);
    if (!req.session.banhmiAmount){
        return res.send({ data: "All out of bánh Mì"});
    }
    req.session.banhmiAmount -=1;
    res.send({ data: "order" });
});

router.get("/banhmi/restock", (req, res) => {
    req.session.banhmiAmount = 5;
    res.send({ data: "restock" });
});

router.get("/banhmi/mobsterrun", (req, res) => {
    // req.session.banhmiAmount = undefined;
    req.session.destroy(() => {
        res.send({ data: "Store closed forever :<("});
    })
});

export default router;