import { getDetailData } from "@/apiHandle/apis";
import FilmCover from "@/components/FilmCover";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  try {
    let data = [{ type: "movie", slug: "936622" }];
    return data;
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}

export async function generateMetadata({
  params: { slug, type },
}: any): Promise<Metadata> {
  const data = await getDetailData(slug, type);
  let icon=data.poster_path?`https://image.tmdb.org/t/p/w200${data.poster_path}`:'/favicon.ico'
  return {
    title: data.title,
    description: data.overview,
    
    icons: {
      icon,
      shortcut: icon,
      apple: icon,
      other: {
        rel: icon,
        url: icon,
      },
    },
  };
}

export default async function Pages({ params: { slug, type } }: any) {
  // Initiate both requests in parallel

  const data = await getDetailData(slug, type);

  return (
    <>
      <FilmCover src={data.backdrop_path} />
      {/* poster and text */}
      <div className="-mt-[150px] flex items-center relative z-10 mobile:block">
        <Image
          alt={data.title}
          width={200}
          height={300}
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
              : "/noposter.jpg"
          }
          className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto ml-5 min-h-[200px] object-cover rounded-xl"
        />
        <div className="px-3 flex flex-col items-start gap-3">
          <p className="text-xl line-clamp-1">{data.title}</p>
          <ul className="flex items-center gap-3">
            {data?.genres?.map(({ name, id }: any) => (
              <li
                key={id}
                className="px-3 py-1.5 bg-slate-300 dark:bg-slate-600 rounded-lg text-sm"
              >
                {name}
              </li>
            ))}
          </ul>
          <p className="line-clamp-4 opacity-[0.9]">{data.overview}</p>
        </div>
      </div>

      {/* <div>{JSON.stringify(data)}</div> */}
    </>
  );
}
