// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectFade,
//   Mousewheel,
//   Keyboard,
//   Scrollbar,
  
// } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/effect-fade";
// // import "swiper/css/lazy";
// import { Movie } from "@/types/interfaces";
// import { Play, Plus } from "lucide-react";
// import { useTranslations } from "next-intl";

// // SwiperCore.use([
// //   Navigation,
// //   Pagination,
// //   Autoplay,
// //   EffectFade,
// //   Mousewheel,
// //   Keyboard,
// //   Scrollbar,
 
// // ]);

// const AvailableNowSwiper = () => {
//   const t = useTranslations();
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [hovered, setHovered] = useState(false);
//   const swiperRef = useRef<SwiperCore | null>(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch("https://mangopulse.net/1001-data.json");
//         const data = await response.json();
//         const moviesData = data[1].videos;
//         setMovies(moviesData);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const handleSlideChange = (swiper: SwiperCore) => {
//     // Add your custom logic here
//   };

//   return (
//     <section
//       className="py-12 relative overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="flex justify-between items-center px-12 mb-6">
//         <h2 className="text-2xl text-white">
//           {t("SectionTitle.WebMainslider")}
//         </h2>
//       </div>

//       <Swiper
//         onSlideChange={handleSlideChange}
//         slidesPerView={5}
//         spaceBetween={15}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         loop={false}
//         speed={2100}
//         navigation={hovered}
//         pagination={{ el: ".swiper-pagination", clickable: true }}
//         autoplay={{ delay: 3000 }}
//         effect="fade"
//         centeredSlides={true}
//         grabCursor={true}
//         mousewheel={true}
//         keyboard={{ enabled: true }}
//         scrollbar={{ draggable: true }}
//         // lazy={{ loadOnTransitionStart: true, loadPrevNext: true }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1280: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         className="hover:cursor-pointer relative -z-50"
//       >
//         {movies.map((movie, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative group transform transition-transform duration-300 hover:z-50 hover:scale-125">
//               <div className="absolute top-0 left-0 font-bold text-sm bg-slate-900/60 text-primary px-2 py-1.5 rounded-tl-lg rounded-br-md">
//                 Free
//               </div>
//               <img
//                 src={movie.bannerImage}
//                 alt={movie.name}
//                 className="w-full h-44 object-cover rounded-lg group-hover:rounded-b-none border-2 border-transparent group-hover:border-x-primary group-hover:border-t-primary"
//               />
//               <div className="DivCardScale">
//                 <div className="flex justify-between items-center w-full bg-slate-900 text-white text-center py-2 px-5">
//                   <h3>{movie.name}</h3>
//                   <div className="flex justify-center items-center gap-2">
//                     <span className="bg-transparent border-2 border-white rounded-full p-1 hover:bg-primary hover:border-primary transform transition-transform duration-300 hover:scale-110">
//                       <Plus />
//                     </span>
//                     <span className="bg-transparent border-2 border-white rounded-full p-1 hover:bg-primary hover:border-primary transform transition-transform duration-300 hover:scale-110">
//                       <Play />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default AvailableNowSwiper;
