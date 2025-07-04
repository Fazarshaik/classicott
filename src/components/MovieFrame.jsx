import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Play, Star, Film, Users } from "lucide-react";
import Home from "./Home";
import "../css/MovieFrame.scss";
import movieData from "../data/movieData";
import movies from "../data/movies";
import allmovies from "../data/allmoviedata";

const MovieFrame = () => {
  const [activeTab, setActiveTab] = useState("trailer");
  const { movieId } = useParams();
  const navigate = useNavigate();

  // Find the movie from all three data sources
  const movieIdInt = parseInt(movieId);
  const selectedMovieFromMovies = movieId
    ? movies.find((movie) => movie.id === movieIdInt)
    : movies[0];

  const selectedMovieFromAllMovies = movieId
    ? allmovies.find((movie) => movie.id === movieIdInt)
    : null;

  const selectedMovieFromMovieData = movieId
    ? movieData.find((movie) => movie.id === movieIdInt)
    : movieData[0];

  // Merge cast, trailer, and other fields with fallback priorities
  const trailer =
    selectedMovieFromAllMovies?.trailer ||
    selectedMovieFromMovieData?.trailer ||
    "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Default trailer fallback

  const cast = selectedMovieFromAllMovies?.cast ||
    selectedMovieFromMovieData?.cast ||
    selectedMovieFromMovies?.cast || [
      {
        name: "Cast information unavailable",
        image: "/assets/images/cast/placeholder.jpeg",
      },
    ];

  const selectedMovie = {
    id: selectedMovieFromAllMovies?.id || selectedMovieFromMovies?.id,
    title:
      selectedMovieFromAllMovies?.title ||
      selectedMovieFromMovieData?.title ||
      selectedMovieFromMovies?.title ||
      "Unknown Title",
    description:
      selectedMovieFromAllMovies?.description ||
      selectedMovieFromMovieData?.description ||
      selectedMovieFromMovies?.description ||
      "No description available.",
    rating:
      selectedMovieFromAllMovies?.rating ||
      selectedMovieFromMovieData?.rating ||
      selectedMovieFromMovies?.rating ||
      "N/A",
    image:
      selectedMovieFromAllMovies?.poster ||
      selectedMovieFromAllMovies?.image ||
      selectedMovieFromMovieData?.image ||
      selectedMovieFromMovies?.image ||
      "/assets/images/placeholder.png",
    trailer,
    cast,
  };

  const handleStartWatching = () => {
    // Add videoSources before navigating
    const movieWithVideoSources = {
      ...selectedMovie,
      videoSources: {
        "720p": "/assets/videos/Titanic1.mp4",
        "480p": "/assets/videos/Titanic2.mp4",
        "360p": "/assets/videos/Titanic3.mp4",
      },
    };
    navigate("/video", { state: { movie: movieWithVideoSources } });
  };

  return (
    <>
      <Home />

      <div className="movie-frame">
        <div className="relative w-full h-screen text-amber-300">
          <img
            src={selectedMovie.image}
            alt={selectedMovie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end items-start p-8">
            <div className="max-w-xl mb-6">
              <h1 className="text-4xl font-bold text-amber-400">
                {selectedMovie.title}
              </h1>
              <p className="mt-3 text-lg">{selectedMovie.description}</p>
              <p className="mt-2 text-amber-300 font-medium">
                Rating: {selectedMovie.rating}/10
              </p>
            </div>
            <button
              onClick={handleStartWatching}
              className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-500 transition px-5 py-2 rounded-full text-sm font-semibold border border-amber-400"
            >
              <Play className="w-5 h-5 text-white" />
              <span>Start Watching</span>
            </button>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "trailer" ? "active" : ""}`}
            onClick={() => setActiveTab("trailer")}
          >
            <Film size={16} /> Watch Trailer
          </div>
          <div
            className={`tab ${activeTab === "cast" ? "active" : ""}`}
            onClick={() => setActiveTab("cast")}
          >
            <Users size={16} /> Cast
          </div>
          <div
            className={`tab ${activeTab === "more" ? "active" : ""}`}
            onClick={() => setActiveTab("more")}
          >
            <Star size={16} /> More Like These
          </div>
        </div>

        <div className="tab-content">
          {activeTab === "trailer" && (
            <div className="trailer">
              <iframe
                src={selectedMovie.trailer}
                title="Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {activeTab === "cast" && (
            <div className="cast-list">
              <h3>Cast</h3>
              <div className="cast-grid">
                {selectedMovie.cast.map((actor, i) => (
                  <div className="cast-card" key={i}>
                    <img src={actor.image} alt={actor.name} />
                    <p>{actor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "more" && (
            <div className="more-slider">
              {movieData
                .filter((movie) => [79, 80, 81, 82].includes(movie.id))
                .map((movie) => (
                  <div key={movie.id} className="more-card">
                    <img src={movie.image} alt={movie.title} />
                    <div className="text">
                      <h4>{movie.title}</h4>
                      <div className="rating">
                        <Star className="w-4 h-4" />
                        {movie.rating}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieFrame;
