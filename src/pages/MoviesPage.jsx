import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/MoviesPage.scss';

const MoviesPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const category = state?.category;

  if (!category) {
    return <div className="movies-page"><p>No category selected.</p></div>;
  }

  return (
    <div className="movies-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h2 className="category-title">{category.title} Collection</h2>
      <p className="category-description">{category.description}</p>

      <div className="movies-list">
        {category.movies.map((movie, idx) => (
          <div key={idx} className="movie-card">
            <h3>{movie.title}</h3>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Director:</strong> {movie.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
