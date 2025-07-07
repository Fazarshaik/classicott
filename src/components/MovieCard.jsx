import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Star, Calendar, Clock, Award, Plus, X } from "lucide-react";
import "../css/MoviesPage.scss";
import { useMyList } from "../context/MyListContex";
import toast from "react-hot-toast";

const MovieCard = ({ movie }) => {
  const [currentFrame, setCurrentFrame] = useState(null);
  const intervalRef = useRef(null);
  const frameIndexRef = useRef(0);
  const navigate = useNavigate();
  const { addToList, removeFromList, myList } = useMyList();

  const isInList = myList.some((m) => m.id === movie.id);

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

  const handlePlay = () => navigate(`/video`);

  const handleAddToList = () => {
    addToList(movie);
    toast.success(`Added "${movie.title}" to your list`);
  };

  const handleRemoveFromList = () => {
    removeFromList(movie.id);
    toast.error(`Removed "${movie.title}" from your list`);
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onClick={() => navigate(`/movieframe/${movie.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="film-strip">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="film-perforation"></div>
        ))}
      </div>

      <div className="movie-poster-container">
        <img
          src={currentFrame || movie.poster}
          alt={movie.title}
          className="movie-poster"
        />

        <div className="poster-overlay" />
        <div className="film-grain" />

        <div className="rating-badge">
          <Star className="star-icon" />
          <span className="rating-text">{movie.rating}</span>
        </div>

        {parseFloat(movie.rating) >= 8.5 && (
          <div className="award-badge">
            <Award className="award-icon" />
          </div>
        )}
      </div>

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
          {(movie.genre ? movie.genre.split(",") : [])
            .slice(0, 2)
            .map((genre, i) => (
              <span key={i} className="genre-tag">
                {genre.trim()}
              </span>
            ))}
        </div>

        <div className="action-buttons">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
            className="play-button"
          >
            <Play className="play-icon" />
            Play
          </button>

          {isInList ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFromList();
              }}
              className="add-button bg-red-600 hover:bg-red-700"
            >
              <X className="add-icon" />
              Remove
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToList();
              }}
              className="add-button"
            >
              <Plus className="add-icon" />
              Add to My List
            </button>
          )}
        </div>
      </div>

      <div className="film-strip">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="film-perforation"></div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
