import Image from "next/image";
import Link from "next/link";
import React from "react";

type propsType = {
  poster_path: string;
  title: string;
  id: string;
  media_type: string;
};

const Card = ({ poster_path, title, id, media_type="movie" }: propsType) => {
  return (
    <Link
      href={`/${media_type}/${id}`}
      prefetch={false}
      className="group mx-3 my-1.5 cursor-pointer"
    >
      <div
        className="
        h-[200px]
        relative
        rounded-lg overflow-hidden
        w-fit
        hover:opacity-50
        transition duration-300
    "
      >
        {poster_path && (
          <Image
            alt={title}
            width={150}
            height={230}
            src={poster_path?`https://image.tmdb.org/t/p/w300${poster_path}`:'/noposter.jpg'}
          />
        )}
      </div>
      <p className="py-1.5 line-clamp-1">{title}</p>
    </Link>
  );
};

export default Card;
