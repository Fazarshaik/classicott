import React from "react";
import { Play, Star } from "lucide-react";
import Home from "./Home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../css/swiper.scss'
import TimeMachine from "./TimeMachine";
import FeaturedMovies from "./FeaturedMovies";

const data = [
  {
    id: 1,
    title: "Casablanca",
    image: "/assets/images/Casablanca.jpg",
    rating: 8.5,
    description:
      "A timeless love story set against the backdrop of WWII, featuring Humphrey Bogart and Ingrid Bergman.",
  },
  {
    id: 2,
    title: "Singin' in the Rain",
    image: "/assets/images/SinginInTheRain.jpg",
    rating: 8.3,
    description:
      "A joyful musical about the transition from silent films to talkies, with iconic dance scenes and humor.",
  },
  {
    id: 3,
    title: "12 Angry Men",
    image: "/assets/images/12AngryMen.jpg",
    rating: 9.0,
    description:
      "A tense courtroom drama exploring justice and reasonable doubt inside a jury room.",
  },
  {
    id: 4,
    title: "Rear Window",
    image: "/assets/images/RearWindow.jpg",
    rating: 8.5,
    description:
      "Hitchcock’s suspense classic about a man spying on his neighbors who suspects murder.",
  },
  {
    id: 5,
    title: "Booksmart",
    image: "/assets/images/Booksmart - 2019.jpg",
    rating: 7.1,
    description:
      "Two teens try to cram four years of fun into one night before graduation. A modern cult classic.",
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
      <TimeMachine />
      <FeaturedMovies />
    </>
  );
};

export default Dashboard;
