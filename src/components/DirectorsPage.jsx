import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Clock, Calendar, Film, ChevronLeft } from "lucide-react";
import "../css/DirectorsPage.scss";
import director from "../data/directorData";

const DirectorsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="directors-page-container">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <button onClick={() => navigate(-1)} className="back-button">
          <ChevronLeft size={18} /> Back
        </button>

        <h1 className="page-title">🎬 Legendary Directors & Their Films</h1>
        <p className="subtitle">
          A curated collection of visionary filmmakers and their masterpieces.
        </p>

        <div className="director-list">
          {director.map((entry) => (
            <div key={entry.id} className="director-entry">
              <img
                src={entry.directorImage}
                alt={entry.director}
                className="director-avatar"
              />
              <div className="director-info">
                <h2>{entry.title}</h2>
                <p className="director-name">
                  Directed by <strong>{entry.director}</strong>
                </p>
                <p className="description">{entry.description}</p>
                <div className="meta">
                  <span><Calendar size={16} /> {entry.year}</span>
                  <span><Clock size={16} /> {entry.duration}</span>
                  <span><Star size={16} /> {entry.rating}</span>
                  <span><Film size={16} /> {entry.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorsPage;
