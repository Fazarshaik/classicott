// Card.jsx
import React from "react";
import { Star, Calendar, Clock } from "lucide-react";

const Card = ({ imageUrlTop, title, rating, year, duration, genre, description }) => {
  return (
    <div className="relative flex-shrink-0 w-64 h-96 from-amber-900/10 via-black to-amber-900/10 rounded-lg shadow-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
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

        {/* Optional: Short Description */}
        <p className="text-xs text-gray-300 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
