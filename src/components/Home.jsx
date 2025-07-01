import React, { useState } from "react";
import { Film, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 px-6 py-4 bg-[#1c140d]/90 backdrop-blur-sm border-b border-amber-600/30">
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
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              "/dashboard",
              "/allmovies",
              "/decades",
              "/categories",
              "/subscription",
              "/mylist",
            ].map((path, i) => {
              const labels = [
                "Home",
                "Movies",
                "Decades",
                "Categories",
                "Subscription",
                "MyList",
              ];
              return (
                <Link
                  key={path}
                  to={path}
                  className="text-amber-400 hover:text-amber-500 transition-colors font-serif tracking-wide"
                >
                  {labels[i]}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Profile Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile">
              <button className="p-2 rounded-full bg-amber-600/20 hover:bg-amber-600/30 transition-colors">
                <User className="w-5 h-5 text-amber-400" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-amber-400" />
            ) : (
              <Menu className="w-5 h-5 text-amber-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-4 pb-4 border-t border-amber-700/20">
            {[
              "/allmovies",
              "/decades",
              "/categories",
              "/subscription",
              "/mylist",
            ].map((path, i) => {
              const labels = [
                "Movies",
                "Decades",
                "Categories",
                "Subscription",
                "Collections",
              ];
              return (
                <Link
                  key={path}
                  to={path}
                  className="block text-amber-400 hover:text-amber-500 transition-colors font-serif tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {labels[i]}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};

export default Home;
