import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMediaByIdQuery, useGetMediaQuery } from "../state/slices/mediaSlice";
import { IMedia } from "../interfaces/media.interface";
import { Pill } from "../components/Pill";
import { RelatedVideos } from "../components/RelatedVideos";
export const VideoScreen = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetMediaByIdQuery(id);
  const { data: relatedVideosData, isLoading:videosDataLoading } = useGetMediaQuery({});
  const media: IMedia = data;
  useEffect(() => {
    console.log(relatedVideosData);
    }, [relatedVideosData]);
  function getTags():string[] {
    return media.tags.split(", ");
  }
  return (
    <main>
      {isLoading && videosDataLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {media && (
        <section className="flex justify-between items-start px-20 pt-24">
          <div className="flex justify-center items-start flex-col gap-5 w-4/6 pt-8">
            <iframe
              src={media.mediaroute}
              title={media.title}
              className="aspect-video w-full"
              allowFullScreen
            ></iframe>
            <aside className="text-slate-200 flex justify-start items-start w-full flex-col gap-5">
              <div className="text-slate-200 flex justify-start items-start gap-2 flex-col">
                <h2 className="text-4xl font-bold">{media.title}</h2>
                <p>{media.description}</p>
              </div>
              <div className="flex gap-5">
                {getTags().map((tag) => (
                  <Pill key={tag} text={tag} />
                ))}
              </div>
            </aside>
          </div>
          <aside className="w-1/5 fixed top-[70px] right-20 h-[90vh] overflow-auto px-2 hide-scrollbar">
          <RelatedVideos videosData={relatedVideosData}></RelatedVideos>
          </aside>
        </section>
      )}
    </main>
  );
};

