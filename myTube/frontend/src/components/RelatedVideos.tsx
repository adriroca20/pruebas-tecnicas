import { IMedia } from "../interfaces/media.interface"
import { VideoCard } from "./VideoCard"
import { SearchIcon } from "../icons/SearchIcon";
import { useState } from "react";
export const RelatedVideos = ({ videosData }: { videosData: IMedia[] }) => {
    const [filteredVideos, setFilteredVideos] = useState<IMedia[]>(videosData);
    const [searchData, setSearchData] = useState<string>("");

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData(e.target.value);
    };
    const browseVideos = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchData === "") return;
        const newFilteredVideos = videosData.filter((video: IMedia) => video.title.toLowerCase().includes(searchData.toLowerCase()));
        setFilteredVideos(newFilteredVideos);
        setSearchData("");
    }
    return (
        <section id="related-videos" className="flex flex-col items-center gap-5 px-20 pb-10">
            <form className="flex gap-2 w-1/2" onSubmit={browseVideos}>
                <input type="text" value={searchData} onChange={handleDataChange} placeholder="Browse..." className="border border-gray-300 px-2 py-1 rounded-md w-full" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md"><SearchIcon /></button>
                <button type="button" onClick={() => setFilteredVideos(videosData)} className="bg-gray-500 text-white px-4 py-2 rounded-md text-nowrap">Clear filters</button>
            </form >
            <div className="flex gap-2 w-full h-fit flex-wrap">
                {
                    filteredVideos.length > 0 ?
                    (
                        filteredVideos.map((video: IMedia, index: number) => (
                            <VideoCard key={index} videoCardData={video} className="min-w-[400px] max-w-[30%]" />
                        ))
                    ):
                    (
                        <>
                        <h2 className="text-2xl text-center w-full">No videos found</h2>
                        <h3 className="text-xl text-center w-full">Try looking for plane, sample...</h3>
                        </>
                    )
                }
            </div>
        </section>
    )
}


