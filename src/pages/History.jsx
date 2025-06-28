import React, { useState } from "react";
import { Star, Calendar, Clock, Award, Trash2, Play } from "lucide-react";

const initialHistory = [
  {
    id: 1,
    title: "Casablanca",
    year: "1942",
    duration: "1h 42m",
    rating: "8.5",
    genre: "Romance, Drama",
    description:
      "In the midst of WWII, a nightclub owner in Casablanca must choose between love and virtue.",
    poster: "/assets/images/1940's/Casablanca_1942.jpeg",
  },
  {
    id: 2,
    title: "The Godfather",
    year: "1972",
    duration: "2h 55m",
    rating: "9.2",
    genre: "Crime, Drama",
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    poster: "/assets/images/1970's/The Godfather 1972.jpeg",
  },
  {
    id: 3,
    title: "Citizen Kane",
    year: "1941",
    duration: "1h 59m",
    rating: "8.3",
    genre: "Drama, Mystery",
    description:
      "Following the death of publishing tycoon Charles Foster Kane, reporters scramble for the meaning of his final utterance.",
    poster: "/assets/images/1940's/Citizen Kane_1941.jpeg",
  },
  {
    id: 4,
    title: "The Wizard of Oz",
    year: "1939",
    duration: "3h 58m",
    rating: "8.2",
    genre: "Drama, Romance",
    description:
      "A manipulative woman and a roguish man carry on a turbulent love affair in the American South during the Civil War.",
    poster: "/assets/images/1930's/The Wizard of Oz_1939.jpeg",
  },
];

const HistoryPage = () => {
  const [history, setHistory] = useState(initialHistory);

  const handleDelete = (id) => {
    setHistory(history.filter((movie) => movie.id !== id));
  };

  return (
    <div className="bg-[#1a120b] min-h-screen px-6 py-10 font-serif text-white">
      <h1 className="text-4xl font-bold text-center text-amber-400 mb-12 drop-shadow-md">
        🎬 Watch History
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {history.map((movie) => (
          <div
            key={movie.id}
            className="relative bg-gradient-to-b from-[#4b2e1e] to-black border border-amber-700 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 group"
          >
            {/* Top filmstrip */}
            <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center gap-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-black/60 rounded-full"></div>
              ))}
            </div>

            {/* Poster */}
            <div className="relative h-[340px] overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover transition group-hover:blur-[1px]"
              />

              {/* Only Play icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="hidden group-hover:flex">
                  <div className="bg-amber-500 text-black p-4 rounded-full shadow-xl animate-pulse cursor-pointer">
                    <Play className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="absolute top-2 right-2 bg-black/80 text-amber-300 px-2 py-1 text-xs rounded-full flex items-center gap-1 border border-amber-500">
              <Star className="w-3 h-3 fill-current" />
              {movie.rating}
            </div>

            {/* Award */}
            {parseFloat(movie.rating) >= 8.5 && (
              <div className="absolute top-2 left-2 bg-amber-600 rounded-full p-1">
                <Award className="w-3 h-3 text-white" />
              </div>
            )}

            {/* Info */}
            <div className="p-4 text-amber-100">
              <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>

              <div className="flex justify-between text-xs text-amber-400 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {movie.year}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {movie.duration}
                </span>
              </div>

              {/* <p className="text-xs text-amber-200 mb-2 line-clamp-3">
                {movie.description}
              </p> */}

              <div className="flex flex-wrap gap-2 mt-1">
                {movie.genre.split(",").map((g, i) => (
                  <span
                    key={i}
                    className="bg-amber-700/20 border border-amber-500 text-amber-200 text-[11px] px-2 py-[2px] rounded-full"
                  >
                    {g.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom filmstrip */}
            <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center gap-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-black/60 rounded-full"></div>
              ))}
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(movie.id)}
              className="absolute bottom-4 right-4 bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 text-sm rounded-full shadow-lg border border-red-900 flex items-center gap-2 transition"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
