import Image from "next/image";
import { Suspense } from "react";
import { TrendingHero } from "@/components/TrendingHero";
import Section from "@/components/Section";
import type { Metadata } from "next";
import { getNowPlaying, getPopular, getTrending } from "@/apiHandle/apis";

export const metadata: Metadata = {
  title: "Movies",
  description: "this is movies app developed by Hardik Naik",
};

export default async function Home() {
  const nowPlayingData = getNowPlaying();
  const popularData = getPopular("movie");
  const popularDataTv = getPopular("tv");
  const trendingData = getTrending("movie");
  const trendingDataTv = getTrending("tv");
  const [nowPlaying, popular, trending, popularTv, trendingTv] =
    await Promise.all([
      nowPlayingData,
      popularData,
      trendingData,
      popularDataTv,
      trendingDataTv,
    ]);
  return (

    <div className="select-none">
      <TrendingHero data={trending.results} />
      <Section type="movie" title="In Theater" data={nowPlaying.results} />
      <Section type="tv" title="Tranding On TV" data={trendingTv.results} />
      <Section type="movie" title="What's Popular" data={popular.results} />
      <Section
        type="tv"
        title="What's Popular On TV"
        data={popularTv.results}
      />
    </div>
  );
}
