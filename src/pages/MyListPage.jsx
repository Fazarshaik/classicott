import React from "react";
import { useMyList } from "../context/MyListContex";
import MovieCard from "../components/MovieCard";
import Home from "../components/Home";

const MyListPage = () => {
  const { myList } = useMyList();

  return (
    <>
    <Home />
    <div className="movie-collection-container">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="movie-collection-title">My List</h1>
        <p className="text-gray-400 mb-6">{myList.length} saved movies</p>

        {myList.length > 0 ? (
          <div className="movie-grid">
            {myList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-center w-full mt-10 text-lg">
            You haven't added any movies yet.
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default MyListPage;
