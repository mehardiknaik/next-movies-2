import Image from "next/image";
import Link from "next/link";
import React from "react";

type propsType = {
  poster: string;
  title: string;
  id: string;
  type: string;
  name: string;
};

const Card = ({ poster, title, id, type, name }: propsType) => {

  return (
    <Link
      href={`/${type}/${id}`}
      prefetch={false}
      className="group mx-3 my-1.5 cursor-pointer"
    >
      <div
        className="
        h-[200px]
        relative
        rounded-lg overflow-hidden
        w-fit
        group-hover:opacity-50
        transition duration-300
        mb-2
    "
      >
        {poster && (
          <Image
            alt={name || title}
            width={150}
            height={230}
            src={
              poster
                ? `https://image.tmdb.org/t/p/w300${poster}`
                : "/noposter.jpg"
            }
          />
        )}
      </div>
      <p className="text-sm line-clamp-1 opacity-70 ">{name || title}</p>
    </Link>
  );
};

export default Card;
