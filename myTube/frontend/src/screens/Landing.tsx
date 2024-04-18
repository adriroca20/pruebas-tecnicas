import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { VideoCard } from "../components/VideoCard";
import { useGetMediaQuery } from "../state/slices/mediaSlice";
import { IMedia } from "../interfaces/media.interface";
import { Slider } from "../components/Slider";
import { RelatedVideos } from "../components/RelatedVideos";

export const Landing = () => {
  const { data, isLoading, isError } = useGetMediaQuery({});
  const media: IMedia[] = data;
  return (
    <main className="text-zinc-900 dark:text-slate-200 pt-20" id="home">
      <Slider sliderData={media} className="h-96" />
      <Hero
        title="Welcome to the Video App"
        subtitle="This is a simple video app"
        description="This is a simple video app that allows you to upload and view videos."
      />
      {media && (
        <RelatedVideos
          videosData={media}
          title="You may also like"
        ></RelatedVideos>
      )}
    </main>
  );
};
