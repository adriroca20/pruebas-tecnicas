import { Link } from "react-router-dom";
import { IMedia } from "../interfaces/media.interface";
import { Carousel } from "flowbite-react";
import { PlayIcon } from "../icons/PlayIcon";
export const Slider = ({
  sliderData,
  className,
}: {
  sliderData: IMedia[];
  className?: string;
}) => {
  return (
    <div className="h-80 px-20">
      <Carousel slide={true}>
        {sliderData &&
          sliderData.map((media: IMedia, index: number) => (
            <div key={index} className="relative h-full w-full">
              <img
                src={media.thumbnail.thumbnailroute}
                alt={media.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute h-full w-full top-0 left-0 flex items-start justify-center flex-col gap-5 py-10 px-20 from-gradient-from-black to-gradient-to-blue bg-gradient-linear bg-gradient-[90deg] bg-opacity-100">
                <h2 className="text-white text-4xl font-bold">{media.title}</h2>
                <div className="flex items-center justify-end gap-3">
                  <Link
                    to={`/video-player/${media.id}`}
                    className="text-white text-lg z-10 font-medium bg-[#017fba] hover:bg-slate-200 hover:text-[#017fba] focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full p-3 transition"
                  >
                    <PlayIcon></PlayIcon>
                  </Link>
                  <span className="text-white text-lg font-medium">
                    Watch now
                  </span>
                </div>
              </div>
              <Link to={`/video-player/${media.id}`} className="absolute inset-0"></Link>
            </div>
          ))}
      </Carousel>
    </div>
  );
};
