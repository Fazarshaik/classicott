import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import allmovies from "../data/allmoviedata";
import MovieCard from "../components/MovieCard"; // ✅ Import here
import "../css/MoviesPage.scss"; // ✅ Reuse movie card styles

const GenrePage = () => {
  const { genreName } = useParams();
  const navigate = useNavigate();

  const filteredMovies = allmovies.filter(
    (movie) => movie.genre.toLowerCase() === genreName.toLowerCase()
  );

  return (
    <div className="movie-collection-container">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <button
          onClick={() => navigate(-1)}
          className="back-button text-yellow-500 hover:text-white flex items-center mb-4"
        >
          <ChevronLeft size={20} />
          Back to Categories
        </button>

        <h1 className="movie-collection-title">{genreName}</h1>
        <p className="text-gray-400 mb-6">{filteredMovies.length} movies found</p>

        <div className="movie-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="text-gray-500 text-center w-full mt-10 text-lg">
              No movies found for this genre.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
