// Card.jsx
import React from "react";
import { Star, Calendar, Clock } from "lucide-react";
import '../css/MoviesPage.scss';

const Card = ({ imageUrlTop, title, rating, year, duration, genre, description, onClick }) => {
  return (
    <div
      className="relative flex-shrink-0 w-64 h-[425px] rounded-lg shadow-xl border border-amber-900/10 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {/* Top Strip */}
      <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-black/40 rounded-full" />
        ))}
      </div>

      {/* Poster */}
      <div className="w-full h-2/3 overflow-hidden">
        <img
          src={imageUrlTop}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Rating Badge */}
      <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center shadow-md z-10">
        <Star className="w-3 h-3 mr-1" /> {rating}
      </div>

      {/* Info Section */}
      <div className="p-3 text-white text-sm space-y-1">
        <h3 className="font-semibold text-base truncate">{title}</h3>

        {/* Year & Duration */}
        <div className="flex items-center justify-between text-gray-300 text-xs">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {year}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {duration}
          </span>
        </div>

        {/* Genre */}
        <div className="text-xs text-gray-400 truncate italic">
          {genre}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-300 line-clamp-2">{description}</p>
      </div>

      {/* Bottom Strip */}
      <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-black/40 rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default Card;
