import React, { useState, useRef } from "react";
import { Play, Star, Calendar, Clock, Award, Plus } from "lucide-react";
import movies from "../data/movies";
import "../css/MoviesPage.scss";

const MovieCard = ({ movie }) => {
  const [currentFrame, setCurrentFrame] = useState(null);
  const intervalRef = useRef(null);
  const frameIndexRef = useRef(0);

  const startPreview = () => {
    if (!movie.frameImages?.length) return;

    frameIndexRef.current = 0;
    setCurrentFrame(movie.frameImages[0]);

    intervalRef.current = setInterval(() => {
      frameIndexRef.current =
        (frameIndexRef.current + 1) % movie.frameImages.length;
      setCurrentFrame(movie.frameImages[frameIndexRef.current]);
    }, 150);
  };

  const stopPreview = () => {
    clearInterval(intervalRef.current);
    setCurrentFrame(null);
  };

  const handleAddToList = () => {
    alert(`Added "${movie.title}" to your list!`);
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
    >
      {/* Film Strip Top */}
      <div className="film-strip">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="film-perforation"></div>
        ))}
      </div>

      {/* Poster or Preview */}
      <div className="movie-poster-container">
        <img
          src={currentFrame || movie.poster}
          alt={movie.title}
          className="movie-poster"
        />

        <div className="poster-overlay" />
        <div className="film-grain" />

        {/* Star Rating */}
        <div className="rating-badge">
          <Star className="star-icon" />
          <span className="rating-text">{movie.rating}</span>
        </div>

        {/* Award Badge */}
        {parseFloat(movie.rating) >= 8.5 && (
          <div className="award-badge">
            <Award className="award-icon" />
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>

        <div className="movie-meta">
          <div className="meta-item">
            <Calendar className="meta-icon" />
            <span>{movie.year}</span>
          </div>
          <div className="meta-item">
            <Clock className="meta-icon" />
            <span>{movie.duration}</span>
          </div>
        </div>

        <p className="movie-description">{movie.description}</p>

        <div className="genre-tags">
          {movie.genre
            .split(",")
            .slice(0, 2)
            .map((genre, i) => (
              <span key={i} className="genre-tag">
                {genre.trim()}
              </span>
            ))}
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="play-button">
            <Play className="play-icon" />
            Play
          </button>

          <button
            onClick={handleAddToList}
            className="add-button"
          >
            <Plus className="add-icon" />
            Add to My List
          </button>
        </div>
      </div>

      {/* Film Strip Bottom */}
      <div className="film-strip">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="film-perforation"></div>
        ))}
      </div>
    </div>
  );
};

const MoviesPage = () => {
  return (
    <div className="movie-collection-container">
      <h2 className="movie-collection-title">🍿 Our Movie Collection</h2>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;