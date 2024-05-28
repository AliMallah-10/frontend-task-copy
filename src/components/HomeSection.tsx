// src/components/HomeSection.js

"use client";
import React, { useEffect, useState, useRef } from "react";
import { Movie } from "@/types/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Crown, Plus } from "lucide-react";
import { useTranslations, useLocale, useMessages } from "next-intl";
import Image from "next/image";

const HomeSection = () => {
  const t = useTranslations();
  const locale = useLocale();

  const [movies, setMovies] = useState<Movie[]>([]); // Use the Movie type
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore>();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://mangopulse.net/1001-data.json");
        const data = await response.json();
        const moviesData = data[0].videos; // Get the first 10 movies
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleThumbnailClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="m-0 ">
      {movies.length > 0 && (
        <div className="relative ">
          <div
            className={`absolute h-1/4 bottom-12 ${
              locale === "ar" ? "left-20" : "right-20"
            } w-2/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 border p-3 m-0 backdrop-blur-lg bg-white/10 rounded-lg z-20 switchGroup`}
          >
            {movies.map((video, index) => (
              <div
                key={index}
                className={`cardDiv relative m-0 rounded-lg cursor-pointer transition-transform ${
                  index === activeIndex
                    ? "transform scale-125 border border-primary"
                    : "opacity-50"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <div className="absolute top-0 left-0 text-sm   bg-slate-900/60 text-primary px-2 py-1 rounded-tl-lg rounded-br-md">
                  {index === 3 ? (
                    <span className="text-[10px] p-0">Free</span>
                  ) : (
                    <Crown height={15} />
                  )}
                </div>
                <Image
                  src={video.portraitImage}
                  alt={video.name}
                  className="w-full h-full object-cover rounded-lg"
                  width={400}
                  height={0}
                  // layout="responsive"
                  quality={100}
                />
              </div>
            ))}
          </div>
          <Swiper
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            slidesPerView={1}
            className="w-full h-screen z-0"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={false}
            speed={2100}
            navigation={false}
            pagination={{ clickable: true }}
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-screen">
                  <Image
                    src={movie.bannerImage}
                    alt={movie.name}
                    className="w-full h-full object-cover"
                    width={500}
                    height={400}
                    // layout="responsive"
                    quality={100}
                  />
                  <div className="absolute  bg-gradient-to-t bottom-0 left-0 right-0 h-1/2 from-black via-black/90 via-30% to-transparent "></div>
                  <div className="absolute  bg-gradient-to-l bottom-0  right-0 h-full w-full  from-black via-black/10 via-20% to-transparent "></div>
                </div>

                <div className="absolute inset-0 flex justify-between items-end px-8 pb-10 pr-20 bottom-10">
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex items-center justify-center">
                      <h1 className="text-4xl">
                        {/* {movie.name} */}
                        {t(`WebMainslider.${movie.name}.name`)}
                      </h1>
                      <span className="mx-5 h-10 border-l-4 border-green-500"></span>
                      <Crown color="green" className="" />
                    </div>

                    <div className="flex items-start">
                      <h2 className="text-white/60 text-xl font-bold">
                        {movie.year}
                      </h2>
                      <span className="mx-2 h-8 border-l-2 border-green-500"></span>
                      <h2 className="text-white/60 text-xl font-bold">
                        <div className="flex justify-start items-start gap-2">
                          {movie.genres.map((genre, idx) => (
                            <div key={idx}>
                              <span className="text-2xl text-gray">
                                {/* {genre} */}
                                {t(`WebMainslider.${movie.name}.genres.${idx}`)}
                              </span>
                              {idx < movie.genres.length - 1 && (
                                <span className="mx-2 h-7 border-l-2 border-green-500"></span>
                              )}
                            </div>
                          ))}
                        </div>
                      </h2>
                    </div>
                    <h3
                      className={`${
                        locale === "ar" ? "max-w-[60%] text-2xl" : ""
                      }`}
                    >
                      {locale === "ar"
                        ? movie.description
                        : t(`WebMainslider.${movie.name}.name`)}
                    </h3>
                    <div className="flex items-start gap-3">
                      <button className="btnSub bg-success text-black text-[15px] font-semibold px-6 py-3 rounded-2xl ">
                        {t("Buttons.Subscribe")}
                      </button>
                      <button className="btnADD flex items-center gap-2  text-white text-[15px]  px-6 py-3 rounded-lg border border-white">
                        <Plus /> {t("Buttons.favorties")}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default HomeSection;
