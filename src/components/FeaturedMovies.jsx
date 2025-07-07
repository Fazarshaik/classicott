import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Star, Calendar, Clock, Award } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import movies from "../data/movies";
import { useMyList } from "../context/MyListContex";

const MovieCard = ({ movie }) => {
  const [currentFrame, setCurrentFrame] = useState(null);
  const intervalRef = useRef(null);
  const frameIndexRef = useRef(0);
  const navigate = useNavigate();
  const { addToList } = useMyList();

  const startPreview = () => {
    if (!movie.frameImages?.length) return;

    frameIndexRef.current = 0;
    setCurrentFrame(movie.frameImages[0]);

    intervalRef.current = setInterval(() => {
      frameIndexRef.current =
        (frameIndexRef.current + 1) % movie.frameImages.length;
      setCurrentFrame(movie.frameImages[frameIndexRef.current]);
    }, 150);
  };

  const stopPreview = () => {
    clearInterval(intervalRef.current);
    setCurrentFrame(null);
  };

  const handleCardClick = () => {
    navigate(`/movieframe/${movie.id}`);
  };

  return (
    <>
      <div
        className="group relative w-[280px] bg-gradient-to-b from-amber-900/20 to-black rounded-lg overflow-hidden border border-amber-600/30 hover:border-amber-400/60 transition-all duration-500 transform hover:scale-105 shadow-lg cursor-pointer"
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
        onClick={handleCardClick}
      >
        <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black/40 rounded-full"></div>
          ))}
        </div>

        <div className="relative w-[320px] h-[320px] overflow-hidden mx-auto mt-2 rounded">
          <img
            src={currentFrame || movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
              currentFrame ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-amber-600 hover:bg-amber-500 rounded-full p-3 transform hover:scale-110 transition duration-200 shadow-lg">
                <Play className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="absolute top-2 right-2 bg-black/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 border border-amber-600/30 text-xs">
            <Star className="w-3 h-3 text-amber-400 fill-current" />
            <span className="text-white font-bold">{movie.rating}</span>
          </div>

          {parseFloat(movie.rating) >= 8.5 && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full p-1">
              <Award className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        <div className="px-3 py-2">
          <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2">
            {movie.title}
          </h3>

          <div className="flex items-center justify-between text-[10px] text-amber-500 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{movie.duration}</span>
            </div>
          </div>

          <p className="text-amber-100 text-xs line-clamp-2">
            {movie.description}
          </p>

          <div className="flex flex-wrap gap-1 mt-2">
            {movie.genre
              .split(",")
              .slice(0, 2)
              .map((genre, i) => (
                <span
                  key={i}
                  className="bg-amber-600/20 text-amber-300 px-2 py-[2px] text-[10px] rounded-full border border-amber-500/30"
                >
                  {genre.trim()}
                </span>
              ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-4">
            <button
              className="flex items-center gap-1 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-semibold px-4 py-2 rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={(e) => {
                e.stopPropagation();
                addToList(movie);
                toast.success(`${movie.title} added to your Wishlist!`, {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "dark",
                });
              }}
            >
              <span>♡</span> Add to Wishlist
            </button>
            <button
              className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-white text-xs font-semibold px-4 py-2 rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/video", { state: { movie } });
              }}
            >
              <Play className="w-4 h-4" /> Play
            </button>
          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black/40 rounded-full"></div>
          ))}
        </div>
      </div>
    </>
  );
};

const FeaturedMovies = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2
        className="text-3xl font-bold text-amber-400 mb-6 tracking-wider"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        FEATURED MOVIES
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
