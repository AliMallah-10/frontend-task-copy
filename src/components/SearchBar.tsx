"use client";

import React, { useState, useEffect } from "react";
import { SearchBarProps, Movie } from "@/types/interfaces";
import { Search, Play, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SearchBar: React.FC<SearchBarProps> = ({ isVisible, onClose }) => {
  const t = useTranslations();
  const [movies, setMovies] = useState<Movie[]>([]); // Use the Movie type

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://mangopulse.net/1001-data.json");
        const data = await response.json();
        const moviesData = data[4].videos.slice(0, 10); // Get the first 10 movies
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-secondary text-white p-4 transition-transform duration-500 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      } h-screen z-50 overflow-hidden overflow-y-visible`}
    >
      <div className="flex flex-col gap-9 mt-24 px-7">
        {/* Search input */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center p-3 bg-input-color w-full rounded-lg SearchInput">
            <Search />
            <input
              type="text"
              placeholder={t("SearchBar.placeholder")}
              className="text-gray p-2 w-full bg-transparent border-none focus:outline-none"
            />
          </div>

          <button
            onClick={onClose}
            className="mx-4 text-[27px] text-primary font-bold"
          >
            {t("Buttons.back")}
          </button>
        </div>

        {/* Most Searched */}
        <div>
          <h2 className="text-white text-3xl font-bold">
            {t("SearchBar.MostSearched")}
          </h2>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 SearchBar ">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="relative  group hover:z-10 transform  transition-transform duration-300 hover:-translate-y-16"
              >
                <div className="rounded-lg z-50 transition-all duration-500 group-hover:scale-125 ">
                  <div className="absolute top-0 left-0 font-bold text-sm bg-slate-900/60 text-primary px-2 py-1.5 rounded-tl-lg rounded-br-md">
                    Free
                  </div>
                  <Image
                    src={movie.landscapeImage}
                    height={100}
                    width={100}
                    alt={movie.name}
                    className="rounded-lg w-full border-2  border-transparent group-hover:border-x-primary group-hover:border-t-primary  group-hover:rounded-b-none"
                  />
                  {/* details */}
                  <div className="DivCardScale">
                    <div className="flex justify-between items-center w-full bg-slate-900 text-white text-center py-2 px-5">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
