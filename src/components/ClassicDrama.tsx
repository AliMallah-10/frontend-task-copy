"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Movie } from "@/types/interfaces";
import { Crown, Play, Plus } from "lucide-react";

import { useTranslations } from "next-intl";
import Image from "next/image";
const MostWatched = () => {
  const t = useTranslations();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeGroup, setActiveGroup] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://mangopulse.net/1001-data.json");
        const data = await response.json();
        const moviesData = data[7].videos; // Get the first 12 movies
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveGroup(Math.floor(swiper.activeIndex / 4));
  };

  const totalGroups = Math.ceil(movies.length / 4);

  return (
    <section
      className="py-12 relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center px-12 mb-6">
        <h2 className="text-2xl text-white">{t("SectionTitle.Classic")}</h2>

        <div
          className={`dotsDiv flex justify-center items-center gap-2 pr-12 ${
            hovered ? "" : "hidden"
          }`}
        >
          {[...Array(totalGroups)].map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer py-[3px] px-[10px] rounded-lg transition-colors ${
                activeGroup === index ? "bg-primary" : "bg-white"
              }`}
              onClick={() => swiperRef.current?.slideTo(index * 4)}
            ></span>
          ))}
        </div>
      </div>

      <Swiper
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        slidesPerView={6.5}
        spaceBetween={15}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={false}
        speed={2100}
        navigation={hovered}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        className="Swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 6.5,
            spaceBetween: 15,
          },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="SwiperSlide">
            <div className="relative group transform transition-all duration-700 border-2 border-transparent hover:border-green-500 hover:z-30 rounded-lg hover:w-[250%] overflow-hidden ">
              <div className="absolute top-0 left-0 font-bold text-sm bg-slate-900/60 text-primary px-2 py-1.5 rounded-tl-lg rounded-br-md">
                <Crown height={18} />
              </div>
              <Image
                src={movie.bannerImage}
                alt={movie.name}
                className="w-full h-80 object-cover rounded-lg group-hover:hidden "
                width={400}
                height={100}
                // layout="responsive"
                quality={100}
              />
              <Image
                src={movie.landscapeImage}
                alt={movie.name}
                className="w-full h-80 object-cover rounded-lg hidden group-hover:block"
                width={400}
                height={0}
                // layout="responsive"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-md transition-max-height duration-600 ease-in-out opacity-0 max-h-0 group-hover:max-h-full group-hover:opacity-100 px-5 p-5">
                  <div className="flex justify-between items-center w-full text-white text-center">
                    <h3> {movie.name}</h3>
                    <div className="flex justify-center items-center gap-2">
                      <span className="bg-transparent border-2 border-white rounded-full p-1 hover:bg-primary hover:border-primary transform transition-transform duration-300 hover:scale-110">
                        <Plus />
                      </span>
                      <span className="bg-transparent border-2 border-white rounded-full p-1 hover:bg-primary hover:border-primary transform transition-transform duration-300 hover:scale-110">
                        <Play />
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-2">
                    {movie.genres.map((genre, idx) => (
                      <div key={idx}>
                        <span className="text-sm text-gray">{genre}</span>
                        {idx < movie.genres.length - 1 && (
                          <span className="mx-3 h-10 border-l-2 border-green-500"></span>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray">{movie.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MostWatched;
