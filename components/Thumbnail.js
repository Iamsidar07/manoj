import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
const baseUrl = "https://image.tmdb.org/t/p/original";
const Thumbnail = ({ movie }) => {

  return (
    <div className=" p-2 transition-all duration-200 ease-in transform  sm:hover:scale-105 group cursor-pointer hover:z-50">
      <Image
        layout="responsive"
        src={
          `${baseUrl}${movie.backdrop_path || movie.poster_path}` ||
          `${baseUrl}${movie.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2 ">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{movie.original_title || movie.title}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.release_date} . <ThumbUpIcon className="h-5 mx-2" />{" "}
          {movie.vote_count}{" "}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
