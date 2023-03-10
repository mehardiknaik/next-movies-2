import Image from "next/image";
import React from "react";

const FilmCover = ({ src }: { src: string }) => {
  return (
    <div className="h-[300px] mobile:h-[250px] left-0 right-0 top-0 relative">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-white to-transparent dark:from-black  dark:to-transparent"></div>
      <Image
        src={src ? `https://image.tmdb.org/t/p/original${src}` : "/nocover.jpg"}
        alt={`cover`}
        width={800}
        height={300}
        className="rounded-sm bg-primary h-full w-full"
      />
    </div>
  );
};

export default FilmCover;
