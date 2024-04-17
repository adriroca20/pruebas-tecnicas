import { Media } from "../models/mediaModel";
import media from "./medias.json";
import dotenv from "dotenv";

dotenv.config();

export class MediasORM {
    static  getMediaItems(): Media[] {
        const mediaItems: Media[] = new Array<Media>();
        media.forEach((element: any) => {
            mediaItems.push(new Media(element.id, element.title, element.description, element.duration, element.tags, element.filedata, element.thumbnail));
        });
        return mediaItems;
    }
}