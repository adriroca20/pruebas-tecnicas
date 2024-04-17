import { IVideocard } from "../interfaces/videoCard.interface"

export const VideoCard = (videoCardData: IVideocard) => {
    const { title, imgSrc } = videoCardData;
    return (
        <div className="aspect-video flex-1 relative min-w-[300px]">
            <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-700/70 transition-opacity duration-300">
                <h2 className="text-white text-lg font-bold">{title}</h2>
            </div>
        </div>
    );
};