import React, { useState, useRef } from 'react';
 
const FrameByFramePreview = ({ frameImages = [], poster, width = '220px', height = '320px' }) => {
  const [currentFrame, setCurrentFrame] = useState(null);
  const intervalRef = useRef(null);
  const frameIndexRef = useRef(0);
 
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
 
  return (
    <div
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      style={{
        width,
        height,
        overflow: 'hidden',
        border: '3px solid gold',
        backgroundColor: '#1a1a1a',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '8px',
      }}
    >
      <img
        src={currentFrame || poster}
        alt="Movie Preview"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'sepia(0.8)',
        }}
      />
    </div>
  );
};
 
export default FrameByFramePreview;
 
 
 