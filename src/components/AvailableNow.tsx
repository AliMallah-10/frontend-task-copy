"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/swiper-bundle.min.css";
import { headingTitles } from "@/constants/headingTitles";
import { Movie } from "@/types/interfaces";
import { Play, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
// SwiperCore.use([Navigation, Pagination]);

const AvailableNow = () => {
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
        const moviesData = data[1].videos; // Get the first 12 movies
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveGroup(Math.floor(swiper.activeIndex / 3));
  };

  const totalGroups = Math.ceil(movies.length / 4);
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section
      className="py-12 relative AvailSection"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="z-0 flex justify-between items-center px-12 mb-6">
        <h2 className="text-2xl text-white">
          {t("SectionTitle.WebMainslider")}
        </h2>

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
        slidesPerView={5}
        spaceBetween={15}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={false}
        speed={2100}
        navigation={hovered}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="hover:cursor-pointer overflow-visible swiper-container "
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="">
            <div className="relative group transform transition-transform duration-300 hover:z-50 hover:scale-125 max-h-full hover:-translate-y-16">
              <div className="absolute top-0 left-0 font-bold text-sm bg-slate-900/60 text-primary px-2 py-1.5 rounded-tl-lg rounded-br-md ">
                Free
              </div>
              <Image
                src={movie.bannerImage}
                alt={movie.name}
                className="w-full h-44 object-cover rounded-lg group-hover:rounded-b-none  border-2  border-transparent group-hover:border-x-primary group-hover:border-t-primary "
                width={400}
                height={0}
                // layout="responsive"
                quality={100} 
              />
              {/* details */}
              <div className="DivCardScale  overflow-hidden">
                <div className="mt-7 w-full bg-slate-900 text-white  py-2 px-5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold ">
                      {" "}
                      {truncateText(t(`OrginalSection.${movie.name}.name`), 15)}
                    </h3>
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
                        <span className="text-sm text-gray">
                          {t(`OrginalSection.${movie.name}.genres.${idx}`)}
                        </span>
                        {idx < movie.genres.length - 1 && (
                          <span className="mx-2 h-10 border-l-2 border-green-500"></span>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Movie description */}
                  <p className="text-sm text-gray">
                    {truncateText(
                      t(`OrginalSection.${movie.name}.description`),
                      80
                    )}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AvailableNow;
