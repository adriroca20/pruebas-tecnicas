import { Media } from "../models/mediaModel";
import media from "./medias.json";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

export class MediasORM {
    static  getMediaItems(): Media[] {
        const mediaItems: Media[] = new Array<Media>();
        media.forEach((element: any) => {
            mediaItems.push(new Media(element.id, element.title, element.description, element.duration, element.tags, element.filedata, element.thumbnail));
        });
        return mediaItems;
    }
    static storeMediaItem(media: Media): void {
        //Aqui lo guardariamos en una base de datos pej. SQL mediante el comando INSERT INTO o utilizando un ORM como TypeORM
        //En este caso, como estamos utilizando un JSON, lo guardamos en el JSON
        const mediaItems: Media[] = this.getMediaItems();
        mediaItems.push(media);
        fs.writeFileSync("./src/data/medias.json", JSON.stringify(mediaItems));
    }
}