import React from "react";
import { Play, Star } from "lucide-react";
import Home from "./Home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../css/swiper.scss'
import FeaturedMovies from './FeaturedMovies'

import Footer from "../pages/Footer";
import Frame from "./Frame";

const data = [
  {
    id: 1,
    title: "Casablanca",
    image: "/assets/images/Casablanca.jpeg",
    rating: 8.5,
    description:
      "A WWII-era romantic drama where an American nightclub owner in Casablanca must choose between love and sacrifice.",
  },
  {
    id: 2,
    title: "The Godfather",
    image: "/assets/images/The GodFather.jpeg",
    rating: 9.2,
    description:
      "An iconic mafia saga portraying the transformation of Michael Corleone from reluctant outsider to ruthless family boss.",
  },
  {
    id: 3,
    title: "The Wolf of Wall Street",
    image: "/assets/images/The Wolf of Wall Street (2013).jpeg",
    rating: 8.2,
    description:
      "A wild true story of greed and excess, following stockbroker Jordan Belfort’s rise and fall in the world of finance.",
  },
  {
    id: 4,
    title: "Titanic",
    image: "/assets/images/Titanic.jpeg",
    rating: 7.9,
    description:
      "A sweeping romance aboard the ill-fated RMS Titanic, where two lovers from different worlds meet during the disaster.",
  },
  {
    id: 5,
    title: "Top Gun: Maverick",
    image: "/assets/images/Top Gun_ Maverick.jpeg",
    rating: 8.3,
    description:
      "Decades later, Maverick returns to train the next generation of Top Gun pilots, confronting his past and flying into the future.",
  },
];

const Dashboard = () => {
  return (
    <>
      <Home />

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-screen"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative w-full h-screen text-amber-300">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end items-start p-8">
                {/* Bottom-Left Text */}
                <div className="max-w-xl mb-6">
                  <h1 className="text-4xl font-bold text-amber-400">
                    {movie.title}
                  </h1>
                  <p className="mt-3 text-lg leading-relaxed">
                    {movie.description}
                  </p>
                  <p className="mt-2 text-amber-300 font-medium">
                    Rating: {movie.rating}/10
                  </p>
                </div>

                {/* Buttons below the text */}
                <div className="flex items-center justify-center gap-4">
                  <button className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-500 transition px-5 py-2 rounded-full text-sm font-semibold border border-amber-400">
                    <Play className="w-5 h-5 text-white" />
                    <span>Start Watching</span>
                  </button>
                  <button className="flex items-center space-x-2  transition px-5 py-2 rounded-full text-sm font-semibold border border-amber-400">
                    <Star className="w-5 h-5 text-amber-400 " />
                    <span>Browse Classics</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Frame />
      <FeaturedMovies /> 
      <Footer />
    </>
  );
};

export default Dashboard;
