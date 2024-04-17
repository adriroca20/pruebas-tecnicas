import { Link } from "react-router-dom";
import { IMedia } from "../interfaces/media.interface";
import { Carousel } from "flowbite-react";

export const Slider = ({
  sliderData,
  className,
}: {
  sliderData: IMedia[];
  className?: string;
}) => {
  return (
    <div className="h-80 px-20">
      <Carousel>
        {sliderData &&
          sliderData.map((media: IMedia, index: number) => (
            <div key={index} className="relative h-full w-full">
              <img
                src={media.thumbnail.thumbnailroute}
                alt={media.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center gap-3 p-10 bg-gray-700/50 transition-opacity duration-300">
                <h2 className="text-white text-4xl font-bold">{media.title}</h2>
              </div>
              <Link
                to={`/video-player/${media.id}`}
                className="absolute inset-0"
                ></Link>
            </div>
          ))}
      </Carousel>
    </div>
  );
};
