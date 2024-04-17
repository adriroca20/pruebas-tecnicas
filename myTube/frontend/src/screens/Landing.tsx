import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { VideoCard } from "../components/VideoCard";
import { useGetMediaQuery } from "../state/slices/mediaSlice";
import { IMedia } from "../interfaces/media.interface";
import { Slider } from "../components/Slider";

export const Landing = () => {
  const { data, isLoading, isError } = useGetMediaQuery({});
  const media: IMedia[] = data;
  return (
    <main className="text-zinc-100 pt-20" id="home">
      <Slider sliderData={media} className="h-96" />
      <Hero
        title="Welcome to the Video App"
        subtitle="This is a simple video app"
        description="This is a simple video app that allows you to upload and view videos."
      />
      <section id="related-videos">
        <h2 className="text-4xl font-bold text-start px-20 my-10">
          You may also like
        </h2>
        <div className="flex justify-start items-center flex-wrap px-20 gap-2">
          {media &&
            media.map((mediaItem: IMedia, index: number) => (
              <VideoCard
                key={index}
                videoCardData={mediaItem}
                className="min-w-[400px]"
              />
            ))}
        </div>
      </section>
    </main>
  );
};
