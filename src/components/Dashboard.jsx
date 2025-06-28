import React from "react";
import { Play, Star } from "lucide-react";
import Home from "./Home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/swiper.scss";
import FeaturedMovies from "./FeaturedMovies";
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
        className="w-full h-[80vh] md:h-[90vh]"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative w-full h-[80vh] md:h-[90vh] text-amber-300">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 text-white flex flex-col justify-end md:justify-center items-start p-6 md:p-12">
                <div className="max-w-xl mb-6 md:mb-12">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-400">
                    {movie.title}
                  </h1>
                  <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
                    {movie.description}
                  </p>
                  <p className="mt-2 text-sm sm:text-base text-amber-300 font-medium">
                    Rating: {movie.rating}/10
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 transition px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold border border-amber-400">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <span>Start Watching</span>
                  </button>
                  <button className="flex items-center gap-2 border border-amber-400 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold hover:bg-amber-500/10 transition">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
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
