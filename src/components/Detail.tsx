import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
type propType = {
  title: string;
  poster_path: string;
  genres: [];
  overview: string;
  release_date: string;
  original_language: string;
  status: string;
  runtime: number | null;
  first_air_date: string;
};

const Detail = ({
  title,
  poster_path,
  genres,
  overview,
  release_date,
  original_language,
  status,
  first_air_date,
  runtime,
}: propType) => {
  return (
    <div className="-mt-[150px] flex items-center relative z-10 mobile:block">
      <Image
        alt={title}
        width={200}
        height={300}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : "/noposter.jpg"
        }
        className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto ml-5 min-h-[200px] object-cover rounded-xl"
      />
      <div className="px-3 flex flex-col items-start gap-3">
        <p className="text-xl line-clamp-1">{title}</p>
        <ul className="flex items-center gap-3 w-full overflow-x-auto">
          {genres?.map(({ name, id }: any) => (
            <li
              key={id}
              className="px-3 py-1.5 bg-slate-300 dark:bg-slate-600 rounded-lg text-sm"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="line-clamp-4 opacity-[0.9]">{overview}</p>
        <ul className="flex items-center flex-wrap list-disc list-inside gap-x-3 gap-y-1">
          <li className="bg-gray-500/10 dark:bg-white/30 p-2 rounded-lg  text-sm ">
            {status}
          </li>
          <li className="text-base">
            {dayjs(first_air_date || release_date).format("DD MMM YYYY")}
          </li>
          {!!runtime && (
            <li className="text-base">
              {dayjs
                .duration(runtime, "minutes")
                .format("H [hours and] m [minutes]")}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
