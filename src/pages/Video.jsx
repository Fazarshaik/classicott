// // import React, { useRef, useState, useEffect, useCallback } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../css/Video.scss";

// // const episodeVideos = {
// //   1: "/assets/episode.mp4",
// //   2: "/assets/anime2.mp4",
// //   3: "/assets/anime3.mp4",
// //   4: "/assets/anime4.mp4",
// //   5: "/assets/anime5.mp4",
// // };
// // const CricketVideoPage = () => {
// //   const videoRef = useRef(null);
// //   const navigate = useNavigate();
// //   const [highlight, setHighlight] = useState(false);
// //   const [originalRate, setOriginalRate] = useState(1);
// //   const [videoEnded, setVideoEnded] = useState(false);
// //   const [selectedEpisode, setSelectedEpisode] = useState(1);
// //   const [brightness, setBrightness] = useState(100);
// //   const [volume, setVolume] = useState(100);
// //   const [quality, setQuality] = useState("auto");
// //   const [showOverlayControls, setShowOverlayControls] = useState(false); // New state for overlay visibility
// //   const toggleHighlight = () => {
// //     const video = videoRef.current;
// //     if (!video) return;
// //     if (!highlight) {
// //       const currentTime = video.currentTime;
// //       const clipStart = Math.max(currentTime - 5, 0);
// //       setOriginalRate(video.playbackRate);
// //       video.pause();
// //       video.currentTime = clipStart;
// //       video.playbackRate = 0.3;
// //       video.play();
// //       setHighlight(true);
// //       setTimeout(() => {
// //         if (video) {
// //           video.playbackRate = originalRate;
// //           setHighlight(false);
// //         }
// //       }, 8000);
// //     } else {
// //       video.playbackRate = originalRate;
// //       setHighlight(false);
// //     }
// //   };
// //   const handleReplay = () => {
// //     const video = videoRef.current;
// //     if (video) {
// //       video.currentTime = 0;
// //       video.play();
// //       setHighlight(false);
// //       setVideoEnded(false);
// //       video.playbackRate = originalRate;
// //     }
// //   };
// //   const handleFullscreen = () => {
// //     const video = videoRef.current;
// //     if (video.requestFullscreen) {
// //       video.requestFullscreen();
// //     } else if (video.webkitRequestFullscreen) {
// //       video.webkitRequestFullscreen();
// //     }
// //   };
// //   const handleVideoEnd = () => {
// //     setVideoEnded(true);
// //   };
// //   const handleEpisodeClick = (ep) => {
// //     if (ep !== selectedEpisode) {
// //       setSelectedEpisode(ep);
// //     }
// //   };
// //   const handleBrightnessChange = (e) => {
// //     const newBrightness = e.target.value;
// //     setBrightness(newBrightness);
// //     if (videoRef.current) {
// //       videoRef.current.style.filter = `brightness(${newBrightness}%)`;
// //     }
// //   };
// //   const handleVolumeChange = (e) => {
// //     const newVolume = e.target.value;
// //     setVolume(newVolume);
// //     if (videoRef.current) {
// //       videoRef.current.volume = newVolume / 100;
// //     }
// //   };
// //   const handleQualityChange = (e) => {
// //     const newQuality = e.target.value;
// //     setQuality(newQuality);
// //     console.log("Video quality changed to:", newQuality);
// //   };
// //   const handleSkipForward = useCallback(() => {
// //     const video = videoRef.current;
// //     if (video) {
// //       video.currentTime += 10;
// //     }
// //   }, []);
// //   useEffect(() => {
// //     const videoWrapper = videoRef.current?.parentElement;
// //     if (!videoWrapper) return;
// //     let timeout;
// //     const showControls = () => {
// //       setShowOverlayControls(true);
// //       clearTimeout(timeout);
// //       timeout = setTimeout(() => setShowOverlayControls(false), 3000); // Hide after 3 seconds of inactivity
// //     };
// //     videoWrapper.addEventListener("mousemove", showControls);
// //     videoWrapper.addEventListener("mouseenter", showControls);
// //     videoWrapper.addEventListener("mouseleave", () => {
// //       clearTimeout(timeout);
// //       setShowOverlayControls(false);
// //     });
// //     showControls();
// //     return () => {
// //       videoWrapper.removeEventListener("mousemove", showControls);
// //       videoWrapper.removeEventListener("mouseenter", showControls);
// //       videoWrapper.removeEventListener("mouseleave", () => {
// //         clearTimeout(timeout);
// //         setShowOverlayControls(false);
// //       });
// //       clearTimeout(timeout);
// //     };
// //   }, []);
// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (video) {
// //       video.pause();
// //       video.removeAttribute("src");
// //       video.load();
// //       video.src = episodeVideos[selectedEpisode];
// //       video.load();
// //       video.play().catch((err) => {
// //         console.warn("Autoplay blocked:", err);
// //       });
// //       setVideoEnded(false);
// //       setHighlight(false);
// //       setBrightness(100);
// //       setVolume(100);
// //       video.style.filter = "brightness(100%)";
// //       video.volume = 1;
// //     }
// //   }, [selectedEpisode]);
// //   return (
// //     <div className="cricket-video-page">
// //       <div className="left-back-button">
// //         <button className="top-left-back-button" onClick={() => navigate(-1)}>
// //           ⬅ Back
// //         </button>
// //       </div>
// //       <div className="cricket-scoreboard">
// //         <div className="team-overview">
// //           <div className="team-name">India</div>
// //           <div>150/3 (18.2 overs)</div>
// //         </div>
// //         <div className="batsmen-info">
// //           <div className="batsman">Dhoni: 78*</div>
// //           <div className="batsman">Virat: 32*</div>
// //         </div>
// //       </div>
// //       <div className="main-content-area">
// //         <div className="video-player-section">
// //           <div className="video-wrapper">
// //             {highlight && (
// //               <div className="highlightoverlay">Highlight Mode</div>
// //             )}
// //             <video
// //               ref={videoRef}
// //               className={`video-player ${highlight ? "highlight-effect" : ""}`}
// //               controls
// //               onEnded={handleVideoEnd}
// //               poster="https://via.placeholder.com/1000x562"
// //             >
// //               <source src={episodeVideos[selectedEpisode]} type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>
// //             {videoEnded && (
// //               <div className="replay-overlay">
// //                 <button className="replay-button" onClick={handleReplay}>
// //                   🔁 Replay
// //                 </button>
// //               </div>
// //             )}
// //             <div
// //               className={`video-controls-overlay ${
// //                 showOverlayControls ? "show" : ""
// //               }`}
// //             >
// //               <div className="overlay-brightness-control">
// //                 <input
// //                   type="range"
// //                   id="brightness-slider"
// //                   min="0"
// //                   max="100"
// //                   value={brightness}
// //                   onChange={handleBrightnessChange}
// //                   orient="vertical"
// //                 />
// //                 <span>{brightness}🔅</span>
// //               </div>
// //               <div className="overlay-volume-control">
// //                 <input
// //                   type="range"
// //                   id="volume-slider"
// //                   min="0"
// //                   max="100"
// //                   value={volume}
// //                   onChange={handleVolumeChange}
// //                   orient="vertical"
// //                 />
// //                 <span>{volume} 🔊</span> {/* Volume emoji */}
// //               </div>
// //               <button
// //                 className="skip-forward-button"
// //                 onClick={handleSkipForward}
// //               >
// //                 ⏩ 10s
// //               </button>
// //             </div>
// //           </div>
// //           <div className="controls-row">
// //             <button
// //               className={highlight ? "highlight-active" : ""}
// //               onClick={toggleHighlight}
// //             >
// //               Highlights
// //             </button>
// //             <button
// //               className="wishlist-button"
// //               onClick={() => navigate("/wishlist")}
// //             >
// //               ❤️ Wishlist
// //             </button>
// //             <button onClick={handleFullscreen}>Fullscreen</button>
// //             <button onClick={handleReplay}>Replay</button>
// //             <div className="video-settings">
// //               <label htmlFor="quality-select">Quality:</label>
// //               <select
// //                 id="quality-select"
// //                 value={quality}
// //                 onChange={handleQualityChange}
// //               >
// //                 <option value="auto">Auto</option>
// //                 <option value="1080p">1080p</option>
// //                 <option value="720p">720p</option>
// //                 <option value="480p">480p</option>
// //                 <option value="360p">360p</option>
// //               </select>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="episodes-list-pan">
// //           <h3>Episodes</h3>
// //           <div className="episodes-scroll-cont">
// //             {[1, 2, 3, 4, 5].map((ep) => (
// //               <div
// //                 className="episode-it"
// //                 key={ep}
// //                 onClick={() => handleEpisodeClick(ep)}
// //               >
// //                 <div className="episode-thumb">
// //                   <img src={`/assets/img5.webp`} alt={`Ep ${ep}`} />
// //                 </div>
// //                 <div className="episode-det">
// //                   <div className="episode-ti">Episode {ep}</div>
// //                   <div className="episode-descrip">
// //                     Match Highlights from Episode {ep}. Amazing moments!
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default CricketVideoPage;

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/Video.scss";

// const AnimeVideoPage = () => {
//   const videoRef = useRef(null);
//   const navigate = useNavigate();
//   const [brightness, setBrightness] = useState(100);
//   const [volume, setVolume] = useState(100);
//   const [quality, setQuality] = useState("auto");
//   const [showOverlayControls, setShowOverlayControls] = useState(false);

//   const handleFullscreen = () => {
//     const video = videoRef.current;
//     if (video.requestFullscreen) {
//       video.requestFullscreen();
//     } else if (video.webkitRequestFullscreen) {
//       video.webkitRequestFullscreen();
//     }
//   };

//   const handleBrightnessChange = (e) => {
//     const newBrightness = e.target.value;
//     setBrightness(newBrightness);
//     if (videoRef.current) {
//       videoRef.current.style.filter = `brightness(${newBrightness}%)`;
//     }
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     setVolume(newVolume);
//     if (videoRef.current) {
//       videoRef.current.volume = newVolume / 100;
//     }
//   };

//   const handleQualityChange = (e) => {
//     const newQuality = e.target.value;
//     setQuality(newQuality);
//     console.log("Video quality changed to:", newQuality);
//   };

//   const handleSkipForward = useCallback(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.currentTime += 10;
//     }
//   }, []);

//   useEffect(() => {
//     const videoWrapper = videoRef.current?.parentElement;
//     if (!videoWrapper) return;
//     let timeout;
//     const showControls = () => {
//       setShowOverlayControls(true);
//       clearTimeout(timeout);
//       timeout = setTimeout(() => setShowOverlayControls(false), 3000);
//     };
//     videoWrapper.addEventListener("mousemove", showControls);
//     videoWrapper.addEventListener("mouseenter", showControls);
//     videoWrapper.addEventListener("mouseleave", () => {
//       clearTimeout(timeout);
//       setShowOverlayControls(false);
//     });
//     showControls();
//     return () => {
//       videoWrapper.removeEventListener("mousemove", showControls);
//       videoWrapper.removeEventListener("mouseenter", showControls);
//       videoWrapper.removeEventListener("mouseleave", () => {
//         clearTimeout(timeout);
//         setShowOverlayControls(false);
//       });
//       clearTimeout(timeout);
//     };
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.pause();
//       video.src = "/assets/main-anime.mp4"; // ✅ Your single video path
//       video.load();
//       video.play().catch((err) => {
//         console.warn("Autoplay blocked:", err);
//       });
//       video.style.filter = "brightness(100%)";
//       video.volume = 1;
//     }
//   }, []);

//   return (
//     <div className="cricket-video-page">
//       <div className="left-back-button">
//         <button className="top-left-back-button" onClick={() => navigate(-1)}>
//           ⬅ Back
//         </button>
//       </div>

//       <div className="main-content-area">
//         <div className="video-player-section">
//           <div className="video-wrapper">
//             <video
//               ref={videoRef}
//               className="video-player"
//               controls
//               poster="https://via.placeholder.com/1000x562"
//             >
//               <source src="/assets/main-anime.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             <div
//               className={`video-controls-overlay ${
//                 showOverlayControls ? "show" : ""
//               }`}
//             >
//               <div className="overlay-brightness-control">
//                 <input
//                   type="range"
//                   min="0"
//                   max="100"
//                   value={brightness}
//                   onChange={handleBrightnessChange}
//                   orient="vertical"
//                 />
//                 <span>{brightness} 🔅</span>
//               </div>
//               <div className="overlay-volume-control">
//                 <input
//                   type="range"
//                   min="0"
//                   max="100"
//                   value={volume}
//                   onChange={handleVolumeChange}
//                   orient="vertical"
//                 />
//                 <span>{volume} 🔊</span>
//               </div>
//               <button
//                 className="skip-forward-button"
//                 onClick={handleSkipForward}
//               >
//                 ⏩ 10s
//               </button>
//               <button className="skip-forward-button" onClick={handleSkipForward}>⏩ 10s</button>
//             </div>
//           </div>

//           <div className="controls-row">
//             <button onClick={handleFullscreen}>Fullscreen</button>
//             <div className="video-settings">
//               <label htmlFor="quality-select">Quality:</label>
//               <select
//                 id="quality-select"
//                 value={quality}
//                 onChange={handleQualityChange}
//               >
//                 <option value="auto">Auto</option>
//                 <option value="1080p">1080p</option>
//                 <option value="720p">720p</option>
//                 <option value="480p">480p</option>
//                 <option value="360p">360p</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimeVideoPage;

// VintageVideoPlayer.jsx
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
