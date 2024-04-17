import { Link } from "react-router-dom";
import { IMedia } from "../interfaces/media.interface";
import { IVideocard } from "../interfaces/videoCard.interface"

export const VideoCard = (videoCardData: IMedia) => {
    const { title, thumbnail } = videoCardData;
    return (
        <div className="aspect-video flex-1 relative min-w-[450px] shadow-sm shadow-slate-50">
            <img src={thumbnail.thumbnailroute} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-700/70 transition-opacity duration-300">
                <h2 className="text-white text-lg font-bold">{title}</h2>
            </div>
        </div>
    );
};