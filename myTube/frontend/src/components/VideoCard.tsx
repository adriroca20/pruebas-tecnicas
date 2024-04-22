import { Link } from "react-router-dom";
import { IMedia } from "../interfaces/media.interface";
import { PlayIcon } from "../icons/PlayIcon";

export const VideoCard = ({ videoCardData, className }: { videoCardData: IMedia, className?: string }) => {
    const { title, thumbnail } = videoCardData;
    return (
        <div className={`aspect-video flex flex-1 relative shadow-sm shadow-slate-50  ${className}`}>
            <img src={thumbnail.thumbnailroute} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-5 opacity-0 hover:opacity-100 bg-gray-700/70 transition-opacity duration-300">
                <h2 className="text-white text-2xl font-bold px-10 text-center text-balance">{title}</h2>
                <span  className="text-white block">
                    <PlayIcon></PlayIcon>
                </span>
                <Link to={`/video-player/${videoCardData.id}`} className="absolute inset-0"></Link>
            </div>
        </div>
    );
};