import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, Settings, Download, Sun } from "lucide-react";
import "../css/Video.scss";

const VintageVideoPlayer = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(100);
  const [showOverlayControls, setShowOverlayControls] = useState(false);
  const [quality, setQuality] = useState("720p");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showBrightnessMenu, setShowBrightnessMenu] = useState(false);

  // Titanic movie data
  const titanicMovie = {
    title: "Titanic",
    year: "1997",
    director: "James Cameron",
    duration: "3h 14m",
    poster: "/assets/images/Titanic.jpeg",
    videoSources: {
      "720p": "/assets/videos/titanic-720p.mp4",
      "480p": "/assets/videos/titanic-480p.mp4", 
      "360p": "/assets/videos/titanic-360p.mp4"
    }
  };

  // Get movie data from navigation state or use default Titanic
  const movieData = location.state?.movie || titanicMovie;

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

  const handleQualityChange = (newQuality) => {
    const currentTime = videoRef.current?.currentTime || 0;
    setQuality(newQuality);
    setShowQualityMenu(false);
    
    // Update video source
    if (videoRef.current) {
      videoRef.current.src = movieData.videoSources[newQuality];
      videoRef.current.currentTime = currentTime;
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  };

  const handleDownload = (quality) => {
    const link = document.createElement('a');
    link.href = movieData.videoSources[quality];
    link.download = `${movieData.title}-${quality}.mp4`;
    link.click();
    setShowDownloadMenu(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
    <div className="video-page">
      {/* Header */}
      <div className="video-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <div className="movie-info">
          <h1 className="movie-title">{movieData.title}</h1>
          <p className="movie-meta">{movieData.year} • {movieData.duration} • {movieData.director}</p>
        </div>
      </div>

      <div className="main-content">
        {/* Video Player Section */}
        <div className="video-player-section">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="video-player"
              poster={movieData.poster}
              src={movieData.videoSources[quality]}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>

            {/* Video Controls Overlay */}
            <div className={`video-controls-overlay ${showOverlayControls ? "show" : ""}`}>
              {/* Top Controls */}
              <div className="top-controls">
                <div className="movie-title-overlay">{movieData.title}</div>
                <div className="top-right-controls">
                  <button 
                    className="control-button"
                    onClick={() => setShowBrightnessMenu(!showBrightnessMenu)}
                  >
                    <Sun className="w-5 h-5" />
                    {brightness}%
                  </button>
                  <button 
                    className="control-button"
                    onClick={() => setShowQualityMenu(!showQualityMenu)}
                  >
                    <Settings className="w-5 h-5" />
                    {quality}
                  </button>
                  <button 
                    className="control-button"
                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Center Play Button */}
              <div className="center-controls">
                <button className="play-button" onClick={togglePlay}>
                  {isPlaying ? <Pause className="w-12 h-12" /> : <Play className="w-12 h-12" />}
                </button>
              </div>

              {/* Bottom Controls */}
              <div className="bottom-controls">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
                
                <div className="control-buttons">
                  <div className="left-controls">
                    <button className="control-button" onClick={togglePlay}>
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button className="control-button" onClick={handleSkipBackward}>
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button className="control-button" onClick={handleSkipForward}>
                      <SkipForward className="w-5 h-5" />
                    </button>
                    <div className="time-display">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>

                  <div className="right-controls">
                    <div className="volume-control">
                      <button 
                        className="control-button"
                        onClick={() => handleVolumeChange({ target: { value: volume === 0 ? 50 : 0 } })}
                      >
                        {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                      />
                    </div>
                    <button className="control-button" onClick={handleFullscreen}>
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Brightness Menu */}
            {showBrightnessMenu && (
              <div className="brightness-menu">
                <div className="brightness-control">
                  <label>Brightness: {brightness}%</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={brightness}
                    onChange={handleBrightnessChange}
                    className="brightness-slider"
                  />
                </div>
              </div>
            )}

            {/* Quality Menu */}
            {showQualityMenu && (
              <div className="quality-menu">
                {Object.keys(movieData.videoSources).map((q) => (
                  <button
                    key={q}
                    className={`quality-option ${quality === q ? 'active' : ''}`}
                    onClick={() => handleQualityChange(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Download Menu */}
            {showDownloadMenu && (
              <div className="download-menu">
                {Object.keys(movieData.videoSources).map((q) => (
                  <button
                    key={q}
                    className="download-option"
                    onClick={() => handleDownload(q)}
                  >
                    Download {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VintageVideoPlayer;
