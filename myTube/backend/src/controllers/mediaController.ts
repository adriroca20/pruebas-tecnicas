import { RequestHandler } from "express";
import { Media } from "../models/mediaModel";
import {MediasORM} from "../data/mediasORM";

const MEDIA_ITEMS:Media[] =MediasORM.getMediaItems();

export const getMediaItems: RequestHandler = (req, res) => {
    res.status(200).send(MEDIA_ITEMS);
}
export const addMediaItem: RequestHandler = (req, res) => {
    res.status(200).send("Media Route post request");
}
export const getMediaById: RequestHandler = (req, res) => {
    const mediaId = req.params.id;
    const media = MEDIA_ITEMS.find((media) => media.id === mediaId);
    if (media) {
        res.status(200).send(media);
    } else {
        res.status(404).send("Media not found");
    }
}