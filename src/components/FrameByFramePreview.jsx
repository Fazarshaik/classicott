import React, { useState, useRef } from "react";
import { Play, Star, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMyList } from "../context/MyListContex";
import toast from "react-hot-toast";

const FrameByFramePreview = ({
  frameImages = [],
  poster,
  title,
  rating,
  description,
  videoUrl,
  width = "280px",
  height = "380px",
  id,
  year,
  duration,
  genre,
}) => {
  const [currentFrame, setCurrentFrame] = useState(null);
  const intervalRef = useRef(null);
  const frameIndexRef = useRef(0);
  const navigate = useNavigate();
  const { addToList, myList } = useMyList();

  const startPreview = () => {
    if (frameImages.length === 0) return;
    frameIndexRef.current = 0;
    setCurrentFrame(frameImages[0]);

    intervalRef.current = setInterval(() => {
      frameIndexRef.current = (frameIndexRef.current + 1) % frameImages.length;
      setCurrentFrame(frameImages[frameIndexRef.current]);
    }, 150);
  };

  const stopPreview = () => {
    clearInterval(intervalRef.current);
    setCurrentFrame(null);
  };

  const handlePlay = () => {
    if (videoUrl) {
      navigate(videoUrl);
    }
  };

  const handleAddToList = (e) => {
    e.stopPropagation(); // Prevent card click when clicking add to list button
    const toastId = "my-list-toast";
    toast.dismiss(toastId); // Dismiss any existing toast with this id

    const alreadyExists = myList.some((item) => item.id === id);

    if (alreadyExists) {
      toast.error(` "${title}" is already in your list.`, {
        id: toastId,
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

    const movieForWishlist = {
      id,
      poster,
      title,
      rating,
      description,
      year,
      duration,
      genre,
    };

    addToList(movieForWishlist);
    toast.success(` "${title}" added to My List!`, {
      id: toastId,
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
    <>
      <div
        style={{ width, margin: "10px" }}
        className="rounded-xl border border-amber-400 shadow-lg overflow-hidden bg-[#1e1e1e] text-white transition-transform hover:-translate-y-1 duration-300"
      >
        {/* Image Card */}
        <div
          onMouseEnter={startPreview}
          onMouseLeave={stopPreview}
          style={{ height }}
          className="relative border-b border-amber-500 rounded-t-xl"
        >
          {/* Top Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-black/40 rounded-full" />
            ))}
          </div>

          <img
            src={currentFrame || poster}
            alt="Movie Preview"
            className="w-full h-full object-cover filter sepia-[0.8] transition duration-300"
          />
        </div>

        {/* Info Below Card */}
        <div className="px-4 py-3 space-y-2">
          {/* Title */}
          <h3 className="text-lg font-bold truncate text-amber-300">{title}</h3>

          {/* Rating */}
          <div className="flex items-center text-amber-400 text-sm font-medium">
            <Star size={16} className="mr-1" />
            {rating}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 line-clamp-2 leading-tight">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handlePlay}
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

          {/* Bottom Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-black/40 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameByFramePreview;
