import React, { useState, useRef } from 'react';
import { Play, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FrameByFramePreview = ({
  frameImages = [],
  poster,
  title,
  rating,
  description,
  videoUrl,
  width = '280px',
  height = '380px',
}) => {
  const [currentFrame, setCurrentFrame] = useState(null);
  const intervalRef = useRef(null);
  const frameIndexRef = useRef(0);
  const navigate = useNavigate();

  const startPreview = () => {
    if (frameImages.length === 0) return;
    frameIndexRef.current = 0;
    setCurrentFrame(frameImages[0]);

    intervalRef.current = setInterval(() => {
      frameIndexRef.current =
        (frameIndexRef.current + 1) % frameImages.length;
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

  return (
    <div
      style={{ width, margin: '10px' }}
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
        <p className="text-sm text-gray-300 line-clamp-2 leading-tight">{description}</p>

        {/* Play Button */}
        <div className="pt-2">
          <button
            onClick={handlePlay}
            className="flex items-center justify-center gap-2 px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-black rounded-full shadow hover:brightness-110 transition"
          >
            <Play size={18} />
            <span className="text-sm font-semibold">Play</span>
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
  );
};

export default FrameByFramePreview;
