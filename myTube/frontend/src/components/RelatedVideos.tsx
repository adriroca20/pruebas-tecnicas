import { IMedia } from "../interfaces/media.interface"
import { VideoCard } from "./VideoCard"

export const RelatedVideos = ({videosData, title} : {videosData:IMedia[], title:string}) => {
    return (
        <section id="related-videos" className="flex flex-col gap-2 px-20">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-slate-200">{title}</h2>
            <div className="flex gap-2 w-full h-fit flex-wrap">
                {
                    videosData.map((video:IMedia, index:number) => (
                        <VideoCard key={index} videoCardData={video} className="min-w-[400px]"/>
                    ))
                }
            </div>
        </section>
    )
}