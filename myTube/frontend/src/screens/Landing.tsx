import { Hero } from "../components/Hero";
import { useGetMediaQuery } from "../state/slices/mediaSlice";
import { IMedia } from "../interfaces/media.interface";
import { Slider } from "../components/Slider";
import { RelatedVideos } from "../components/RelatedVideos";

export const Landing = () => {
  //data is the media array
  //isLoading is a boolean that is true when the data is being fetched
  //isError is a boolean that is true when there is an error fetching the data
  const { data, isLoading, isError } = useGetMediaQuery({});
  const media: IMedia[] = data;
  return (
    <main className="text-zinc-900 dark:text-slate-200 pt-20" id="home">
      <Slider sliderData={media}/>
      <Hero
        title="Welcome to MyTube"
        subtitle="Find the best corporate videos here!"
        description="This is a simple video app that allows you to upload and view videos."
      />
      {media && (
        <RelatedVideos
          videosData={media}
        ></RelatedVideos>
      )}
    </main>
  );
};
