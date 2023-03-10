import Image from "next/image";
import { Inter } from "next/font/google";
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
  const popularData = getPopular();
  const trendingData = getTrending();
  const [nowPlaying, popular, trending] = await Promise.all([
    nowPlayingData,
    popularData,
    trendingData,
  ]);
  return (
    <div>
      <TrendingHero data={trending.results} />
      <Section title="In Theater" data={nowPlaying.results} />
      {/* <Section title="Tranding" data={trending.results} /> */}
      <Section title="What's Popular" data={popular.results} />
    </div>
  );
}
