import { Router } from "express";
import { getMediaItems } from "../controllers/mediaController";
const router = Router();
router.get("/", (req, res) => {
    res.send("Media Route get request");
});
router.post("/", (req, res) => {
    res.send("Media Route post request");
});
router.get("/getmedias", getMediaItems);
router.post("/addmedias", (req, res) => {
    res.send("Hello World");
});

export default router;