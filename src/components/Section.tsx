"use client";
import React, { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const Section = ({
  data,
  title,
  type,
}: {
  data: [];
  title: string;
  type: string;
}) => {
  const [swipData, setSwipData] = useState(data);
  return (
    <>
      <h1 className="text-xl pt-2">{title}</h1>
      <Swiper
        spaceBetween={50}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide:true
        }}
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
        {swipData.map((e: any) => (
          <SwiperSlide key={e.id}>
            <Card
              title={e?.title}
              poster={e?.poster_path}
              id={e?.id}
              type={type}
              name={e?.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Section;
