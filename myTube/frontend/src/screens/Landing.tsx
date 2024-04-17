import { Hero } from "../components/Hero"
import { VideoCard } from "../components/VideoCard"
import { IVideocard } from "../interfaces/videoCard.interface"

const VIDEO_CARDS:IVideocard[] = [
    {
        imgSrc: "https://via.placeholder.com/150",
        title: "Video 1"
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        title: "Video 2"
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        title: "Video 3"
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        title: "Video 3"
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        title: "Video 3"
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        title: "Video 3"
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        title: "Video 3"
    }
]

export const Landing = () => {
    return (
        <main className="text-zinc-100">
            <Hero title="Welcome to the Video App" subtitle="This is a simple video app" description="This is a simple video app that allows you to upload and view videos." />
            <h2 className="text-4xl font-bold text-start px-20 my-10">You may also like</h2>
            <div className="flex justify-start items-center flex-wrap px-20 gap-2">
                {VIDEO_CARDS.map((videoCard, index) => (
                    <VideoCard key={index} {...videoCard} />
                ))}
            </div>
        </main>
    )
}