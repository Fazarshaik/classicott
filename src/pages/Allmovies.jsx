import React, { useState, useRef } from "react";
import { Play, Star, Calendar, Clock, Award, Plus } from "lucide-react";
import allmovies from "../data/allmoviedata";
import Home from "../components/Home";
import { useMyList } from "../context/MyListContex";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const MovieCard = ({ movie }) => {
  const [currentFrame, setCurrentFrame] = useState(null);
  const intervalRef = useRef(null);
  const frameIndexRef = useRef(0);
  const navigate = useNavigate();

  const { addToList, myList } = useMyList();

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

  const handlePlayClick = (e) => {
    e.stopPropagation(); // Prevent card click when clicking play button
    navigate(`/movieframe/${movie.id}`);
  };

  const handleAddToList = (e) => {
    e.stopPropagation(); // Prevent card click when clicking add to list button
    const alreadyExists = myList.some((item) => item.id === movie.id);

    if (alreadyExists) {
      toast.error(` "${movie.title}" is already in your list.`, {
        style: {
          background: "#1c140d",
          color: "white",
          border: "1px solid #ef4444",
        },
        iconTheme: {
          primary: "#f87171",
          secondary: "#1c140d",
        },
      });
      return;
    }

    addToList(movie);
    toast.success(` "${movie.title}" added to My List!`, {
      style: {
        background: "#1c140d",
        color: "white",
        border: "1px solid #d97706",
      },
      iconTheme: {
        primary: "#f59e0b",
        secondary: "#1c140d",
      },
    });
  };

  return (
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
          src={currentFrame || movie.image || movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 cursor-pointer"
          onClick={handleCardClick}
        />

        <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

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

        <div className="mt-3 flex justify-center gap-3">
          <button
            onClick={handlePlayClick}
            className="flex items-center gap-1 bg-amber-600 hover:bg-amber-500 text-white text-xs px-3 py-1 rounded-full shadow transition"
          >
            <Play className="w-4 h-4" />
            Play Now
          </button>

          <button
            onClick={handleAddToList}
            className="flex items-center gap-1 border border-amber-500 text-amber-400 text-xs px-3 py-1 rounded-full hover:bg-amber-600/10 transition"
          >
            <Plus className="w-4 h-4" />
            Add to My List
          </button>
        </div>
      </div>

      <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-black/40 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

const Allmovies = () => {
  return (
    <>
      <Home />
      <div className="px-4 py-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-amber-400 mb-12 font-serif tracking-wide drop-shadow-lg">
          🍿 Our Movie Collection
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {allmovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Allmovies;
