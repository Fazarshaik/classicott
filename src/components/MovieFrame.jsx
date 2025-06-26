import React, { useState } from "react";
import { Play, Star, Film, Users } from "lucide-react";
import Home from "./Home";
import "../css/MovieFrame.scss";
import movieData from "../data/movieData";

const MovieFrame = () => {
  const [activeTab, setActiveTab] = useState("trailer");
  const selectedMovie = movieData[0]; // Titanic

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
            <button className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-500 transition px-5 py-2 rounded-full text-sm font-semibold border border-amber-400">
              <Play className="w-5 h-5 text-white" />
              <span>Start Watching</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
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
            {movieData.slice(1, 5).map((movie) => (
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