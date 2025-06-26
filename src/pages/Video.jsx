import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Video.scss";

const VintageVideoPlayer = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(100);
  const [showOverlayControls, setShowOverlayControls] = useState(false);
  const [quality, setQuality] = useState("auto");

  const handleBrightnessChange = (e) => {
    const newBrightness = e.target.value;
    setBrightness(newBrightness);
    if (videoRef.current) {
      videoRef.current.style.filter = `brightness(${newBrightness}%)`;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
    }
  };

  const handleSkipForward = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime += 10;
    }
  }, []);

  const handleSkipBackward = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Math.max(0, video.currentTime - 10);
    }
  }, []);

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  const handleQualityChange = (e) => {
    const newQuality = e.target.value;
    setQuality(newQuality);
    console.log("Video quality changed to:", newQuality);
  };

  useEffect(() => {
    const videoWrapper = videoRef.current?.parentElement;
    if (!videoWrapper) return;
    let timeout;
    const showControls = () => {
      setShowOverlayControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowOverlayControls(false), 3000);
    };
    videoWrapper.addEventListener("mousemove", showControls);
    videoWrapper.addEventListener("mouseenter", showControls);
    videoWrapper.addEventListener("mouseleave", () => {
      clearTimeout(timeout);
      setShowOverlayControls(false);
    });
    showControls();
    return () => {
      videoWrapper.removeEventListener("mousemove", showControls);
      videoWrapper.removeEventListener("mouseenter", showControls);
      videoWrapper.removeEventListener("mouseleave", () => {
        clearTimeout(timeout);
        setShowOverlayControls(false);
      });
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="cricket-video-page">
      <button className="top-left-back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
      <div className="main-content-area">
        <div className="video-player-section">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="video-player"
              controls
              poster="https://via.placeholder.com/1000x562"
              src="/assets/episode.mp4"
            >
              Your browser does not support the video tag.
            </video>
            <div
              className={`video-controls-overlay ${
                showOverlayControls ? "show" : ""
              }`}
            >
              <div className="overlay-brightness-control">
                <input
                  type="range"
                  id="brightness-slider"
                  min="0"
                  max="100"
                  value={brightness}
                  onChange={handleBrightnessChange}
                />
                <span>🔆 {brightness}</span>
              </div>

              <div className="overlay-volume-control">
                <input
                  type="range"
                  id="volume-slider"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                />
                <span>🔊 {volume}</span>
              </div>

              <div className="skip-buttons-container">
                <button onClick={handleSkipBackward}>⏪ 10s</button>
                <button onClick={handleSkipForward}>⏩ 10s</button>
                <button onClick={handleFullscreen}>🔍 Fullscreen</button>
                <select value={quality} onChange={handleQualityChange}>
                  <option value="auto">Auto</option>
                  <option value="1080p">1080p</option>
                  <option value="720p">720p</option>
                  <option value="480p">480p</option>
                  <option value="360p">360p</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VintageVideoPlayer;
