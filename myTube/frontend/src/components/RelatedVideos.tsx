import { IMedia } from "../interfaces/media.interface"
import { VideoCard } from "./VideoCard"

export const RelatedVideos = ({videosData} : {videosData:IMedia[]}) => {
    return (
        <div className="flex flex-col gap-2 h-full">
            <h2 className="text-2xl font-bold text-slate-200">Related Videos</h2>
            <div className="flex flex-col gap-2 w-full">
                {
                    videosData.map((video:IMedia, index:number) => (
                        <VideoCard key={index} videoCardData={video} />
                    ))
                }
            </div>
        </div>
    )
}