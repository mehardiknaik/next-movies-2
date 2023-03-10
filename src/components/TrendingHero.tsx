"use client";
import Image from "next/image";
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const TrendingHero = ({ data }: any) => {
  console.log(data);

  return (
    <Swiper
      spaceBetween={50}
      modules={[Autoplay, Navigation]}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((e: any) => (
        <SwiperSlide key={e.id}>
          <Link
            href={`/${e.media_type}/${e.id}`}
            prefetch={false}
            className="h-[300px] mobile:h-[200px] relative flex items-center cursor-pointer"
          >
            {/* bg image */}
            <div className="absolute left-0 top-0 right-0 bottom-0 hover:scale-105 duration-[2000ms]">
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black"></div>
              <Image
                src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                alt="ad"
                width={800}
                height={800}
                className="rounded-sm bg-primary h-full w-full"
              />
            </div>
            {/* text */}
            <div className="flex ml-12 mobile:ml-1 flex-col gap-3 items-start relative z-10 max-w-[50%] mobile:max-w-[100%]">
              <p className="text-xl line-clamp-1">{e.title}</p>
              <p className="text-sm line-clamp-3">{e.overview}</p>
              {/* <button className="px-3 py-1.5 flex items-center gap-3 bg-primary rounded-md">
                <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
                <span>Play trailer</span>
              </button> */}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
