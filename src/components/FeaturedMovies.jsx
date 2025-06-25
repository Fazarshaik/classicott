import { Play, Star, Calendar, Clock, Award } from 'lucide-react';
import { useState } from 'react';
import movies from '../data/movies';

const FeaturedMovies = () => {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-amber-900/10 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-400 tracking-wider mb-4">CINEMA COLLECTION</h2>
          <p className="text-amber-100 text-lg font-light">Discover Timeless Masterpieces</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="group relative bg-gradient-to-b from-amber-900/20 to-black rounded-lg overflow-hidden border-2 border-amber-600/30 hover:border-amber-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/25"
              onMouseEnter={() => setHoveredMovie(index)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              {/* Deco Corners */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-amber-400/60"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-amber-400/60"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-amber-400/60"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-amber-400/60"></div>
              </div>

              {/* Film strip top */}
              <div className="h-3 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-black/40 rounded-full"></div>
                ))}
              </div>

              {/* Poster */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply"></div>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='20' cy='15' r='1'/%3E%3Ccircle cx='35' cy='8' r='1'/%3E%3Ccircle cx='45' cy='25' r='1'/%3E%3Ccircle cx='15' cy='35' r='1'/%3E%3Ccircle cx='30' cy='45' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredMovie === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-amber-600 hover:bg-amber-500 rounded-full p-6 transform hover:scale-110 transition-all duration-200 shadow-xl shadow-amber-600/50">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </button>
                  </div>

                  {/* Preview pulse dots */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/90 rounded p-2 text-center">
                      <div className="text-amber-400 text-xs font-mono">PREVIEW</div>
                      <div className="flex justify-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 border border-amber-600/30">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-white text-sm font-bold">{movie.rating}</span>
                </div>

                {/* Award badge */}
                {parseFloat(movie.rating) >= 8.5 && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full p-2">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="p-5">
                <h3 className="text-white font-serif text-xl mb-3 group-hover:text-amber-400 transition-colors line-clamp-2 leading-tight">
                  {movie.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-amber-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{movie.duration}</span>
                  </div>
                </div>

                <p className="text-amber-100 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {movie.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genre.split(',').slice(0, 2).map((genre, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 text-amber-400 px-3 py-1 rounded-full text-xs border border-amber-600/30"
                    >
                      {genre.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Film strip bottom */}
              <div className="h-3 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center space-x-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-black/40 rounded-full"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {movies.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-amber-600/30 mb-4">🎬</div>
            <h3 className="text-2xl font-serif text-amber-400 mb-2">No Films Found</h3>
            <p className="text-amber-600">Try adjusting your search or time period selection</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedMovies;
