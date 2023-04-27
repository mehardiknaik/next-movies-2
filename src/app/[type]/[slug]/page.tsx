import { getDetailData } from "@/apiHandle/apis";
import Credit from "@/components/Credit";
import Detail from "@/components/Detail";
import FilmCover from "@/components/FilmCover";
import Section from "@/components/Section";
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
  let icon = data.poster_path
    ? `https://image.tmdb.org/t/p/w200${data.poster_path}`
    : "/favicon.ico";
  return {
    title: data.name || data.title,
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
      <Detail {...data} />
      {data?.credits?.cast && (
        <Credit data={data?.credits?.cast} title="Cast" />
      )}
      {data?.credits?.cast && (
        <Credit data={data?.credits?.crew} title="Crew" />
      )}
    </>
  );
}
