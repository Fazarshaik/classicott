import React, { useState } from "react";
import { Film, Search, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery]=useState()
  return (
    <header className="relative z-50 px-6 py-4 bg-[#1c140d]/90 backdrop-blur-sm border-b border-amber-600/30"
>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Film className="w-8 h-8 text-amber-400" />
            <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-sm"></div>
          </div>
          <div className="text-2xl font-bold">
            <span className="text-amber-400 font-serif tracking-wider">
              CLASSIC
            </span>
            <span className="text-white font-serif tracking-wider ml-2">
              CINEMA
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          
            <Link
              to="/movies"
              className="text-amber-400 hover:text-amber-500 transition-colors font-serif tracking-wide"
            >
              Movies
            </Link>
            <Link
              to="/decades"
              className="text-amber-400 hover:text-amber-500 transition-colors font-serif tracking-wide"
            >
              Decades
            </Link>
            <Link
              to="/stars"
              className="text-amber-400 hover:text-amber-500 transition-colors font-serif tracking-wide"
            >
              Stars
            </Link>
            <Link
              to="/collections"
              className="text-amber-400 hover:text-amber-500 transition-colors font-serif tracking-wide"
            >
              Collections
            </Link>
         
        </nav>

        {/* Search and User */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-600" />
            <input
              type="text"
              placeholder="Search classics..."
              className="bg-amber-900/20 border border-amber-600/30 rounded-full py-2 pl-10 pr-4 text-white placeholder-amber-600 focus:outline-none focus:border-amber-400 focus:bg-amber-900/30 transition-all w-48"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="p-2 rounded-full bg-amber-600/20 hover:bg-amber-600/30 transition-colors">
            <User className="w-5 h-5 text-amber-400" />
          </button>
          <button className="md:hidden p-2">
            <Menu className="w-5 h-5 text-amber-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Home;
