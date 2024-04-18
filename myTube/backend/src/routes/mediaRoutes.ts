import { Router } from "express";
import { getMediaItems, getMediaById, createMediaItem } from "../controllers/mediaController";
const router = Router();
router.get("/", (req, res) => {
    res.send("Media Route get request");
});
router.post("/", (req, res) => {
    res.send("Media Route post request");
});
router.get("/getmedias", getMediaItems);
router.get("/getmedia/:id", getMediaById);
router.post("/addmedias",createMediaItem);

export default router;