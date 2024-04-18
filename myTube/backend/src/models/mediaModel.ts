import { IMedia } from "../interfaces/media.interface";

export class Media implements IMedia {
    id: string; //Aquí se pide como obligatorio el id porque nuestra BDD es un JSON. Si fuera una base de datos SQL, el id sería autoincremental y no sería necesario pasarlo como parámetro.
    title: string;
    description: string;
    duration: number;
    tags: string;
    filedata: {
        bitrate: number;
        fileSize: number;
        filename: string;
    };
    thumbnail: {
        id: string;
        name: string;
        filename: string;
        thumbnailroute: string;
    };
    mediaroute: string;

    constructor(id: string, title: string, description: string, duration: number, tags: string, filedata: { bitrate: number, fileSize: number, filename: string }, thumbnail: { id: string, name: string, filename: string }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.tags = tags;
        this.filedata = {
            ...filedata,
        };
        this.thumbnail = {
            ...thumbnail,
            thumbnailroute: process.env.THUMBNAIL_ROUTE + thumbnail.filename
        };
        this.mediaroute = process.env.MEDIA_ROUTE + filedata.filename;
    }
}