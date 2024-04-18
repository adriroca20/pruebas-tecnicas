import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetMediaByIdQuery,
  useGetMediaQuery,
} from "../state/slices/mediaSlice";
import { IMedia } from "../interfaces/media.interface";
import { Pill } from "../components/Pill";
import { RelatedVideos } from "../components/RelatedVideos";
export const VideoScreen = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetMediaByIdQuery(id);
  const { data: relatedVideosData, isLoading: videosDataLoading } =
    useGetMediaQuery({});
  const media: IMedia = data;
  useEffect(() => {
    console.log(relatedVideosData);
  }, [relatedVideosData]);
  function getTags(): string[] {
    return media.tags.split(", ");
  }
  return (
    <>
      {isLoading && videosDataLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {media && (
        <section className="flex justify-start items-center py-24 flex-col gap-5 h-full">
          <div className="flex justify-center items-start flex-col gap-5 w-full px-20">
            <iframe
              src={media.mediaroute}
              title={media.title}
              className="aspect-video w-full h-[650px]"
              allowFullScreen
            ></iframe>
            <div className="text-slate-200 flex justify-between py-6 items-center w-full gap-5">
              <div className="text-zinc-900 dark:text-slate-200 flex justify-start items-start gap-2 flex-col">
                <h2 className="text-4xl font-bold">{media.title}</h2>
                <p>{media.description}</p>
              </div>
              <div className="flex gap-5">
                {getTags().map((tag) => (
                  <Pill key={tag} text={tag} />
                ))}
              </div>
            </div>
          </div>
          <RelatedVideos videosData={relatedVideosData} title="Related videos"></RelatedVideos>
        </section>
      )}
    </>
  );
};
