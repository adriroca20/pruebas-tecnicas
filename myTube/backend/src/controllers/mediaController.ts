import { RequestHandler } from "express";
import { Media } from "../models/mediaModel";
import {MediasORM} from "../data/mediasORM";

const MEDIA_ITEMS:Media[] =MediasORM.getMediaItems();

export const getMediaItems: RequestHandler = (req, res) => {
    res.send(MEDIA_ITEMS);
}
export const addediaItem: RequestHandler = (req, res) => {
    res.send("Media Route post request");
}