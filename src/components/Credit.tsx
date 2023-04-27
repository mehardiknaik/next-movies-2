"use client";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

type proptype = {
  data: [];
  title: string;
};

export default function Credit({ data, title }: proptype) {
  return (
    <div>
      <h1 className="text-xl my-2">{title}</h1>
      <Swiper
        spaceBetween={3}
        modules={[Autoplay]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          720: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log("swiper")}
        onReachEnd={(e) => {
          console.log("end", e);
        }}
      >
        {data.slice(0,20).map((e: any) => (
          <SwiperSlide className="text-center" key={e.id}>
            <Image
              alt={e.id}
              draggable="false"
              width={150}
              height={150}
              className="h-[150px] rounded-full w-[150px] mb-2"
              src={
                e?.profile_path
                  ? `https://image.tmdb.org/t/p/w154${e?.profile_path}`
                  : "/noposter.jpg"
              }
            />
            <p className="text-sm line-clamp-1 opacity-70">{e?.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
