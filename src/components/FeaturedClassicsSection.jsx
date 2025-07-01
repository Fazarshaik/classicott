import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card"; // Your updated frame-preview card
// import movieData from '../data/movieData';
import movies from "../data/movies";

const FeaturedClassicsSection = () => {
  const scrollRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(200);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollSpeed, behavior: "smooth" });
      increaseSpeed();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollSpeed, behavior: "smooth" });
      increaseSpeed();
    }
  };

  const increaseSpeed = () => {
    setScrollSpeed((prev) => Math.min(prev + 100, 800)); // max speed cap
  };

  const handleCardClick = (movieId) => {
    navigate(`/movieframe/${movieId}`);
  };

  return (
    <div className="bg-gradient-to-r bg-#1c140d-900  text-white py-10 px-6">
      {/* Header and Navigation */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-amber-400">
          Featured Classics
        </h2>
        <div className="flex space-x-4">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full bg-gray-700 text-white hover:bg-amber-400  hover:scale-110 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="p-3 rounded-full bg-amber-500 text-white hover:bg-amber-400 hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Movie Cards Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto pb-4 custom-scrollbar-hide space-x-6 scroll-smooth"
      >
        {movies.map((movie) => (
          <Card
            key={movie.id}
            imageUrlTop={movie.poster}
            title={movie.title}
            rating={movie.rating}
            year={movie.year}
            duration={movie.duration}
            genre={movie.genre}
            description={movie.description}
            onClick={() => handleCardClick(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedClassicsSection;
