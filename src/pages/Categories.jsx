import React, { useState } from 'react';
import {
  Eye, Heart, Music, Sword, Smile,
  Award, ChevronRight, Film, Sunrise,
  Palette, Camera, Wind
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/Categories.scss'; // ✅ Import your SCSS file here
import Home from '../components/Home';

const Categories = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const navigate = useNavigate();

  const mainCategories = [
    {
      id: 1,
      title: "Silent Era",
      description: "Groundbreaking films from cinema's earliest years",
      iconType: 'Film',
      image: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg",
    },
    {
      id: 2,
      title: "Golden Dawn",
      description: "The birth of Hollywood's golden age",
      iconType: 'Sunrise',
      image: "https://images.pexels.com/photos/3807697/pexels-photo-3807697.jpeg",
    },
    {
      id: 3,
      title: "War and Drama",
      description: "Powerful stories from the battlefield and beyond",
      iconType: 'Sword',
      image: "https://images.pexels.com/photos/3807701/pexels-photo-3807701.jpeg",
    },
    {
      id: 4,
      title: "Technicolor",
      description: "Vibrant color films that defined an era",
      iconType: 'Palette',
      image: "https://images.pexels.com/photos/3807705/pexels-photo-3807705.jpeg",
    },
    {
      id: 5,
      title: "New Wave",
      description: "Innovative films that broke cinematic conventions",
      iconType: 'Wind',
      image: "https://images.pexels.com/photos/3807710/pexels-photo-3807710.jpeg",
    },
    {
      id: 6,
      title: "Auteur Era",
      description: "Visionary directors and their signature styles",
      iconType: 'Camera',
      image: "https://images.pexels.com/photos/3807715/pexels-photo-3807715.jpeg",
    }
  ];

  const getIconComponent = (iconType) => {
    const iconMap = {
      Eye, Heart, Music, Sword, Smile, Award,
      Film, Sunrise, Palette, Camera, Wind
    };
    return iconMap[iconType] || Eye;
  };

  const handleExplore = (category) => {
    navigate(`/genre/${encodeURIComponent(category.title)}`);
  };

  const filteredCategories = selectedCategoryId
    ? mainCategories.filter(c => c.id === selectedCategoryId)
    : mainCategories;

  return (
    <>
    <Home />
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">
          {selectedCategoryId ? "Selected Genre" : "Film Categories"}
        </h2>

        {selectedCategoryId && (
          <button
            onClick={() => setSelectedCategoryId(null)}
            className="back-button"
          >
            ← Back to All Genres
          </button>
        )}

        <div className="categories-grid">
          {filteredCategories.map((category) => {
            const IconComponent = getIconComponent(category.iconType);
            return (
              <div key={category.id} className="category-card">
                <div className="card-image-container" onClick={() => setSelectedCategoryId(category.id)}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="card-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="film-count">4 Films</div>
                </div>

                <div className="card-content">
                  <div className="category-header">
                    <IconComponent className="category-icon" />
                    <h3>{category.title}</h3>
                  </div>
                  <p>{category.description}</p>
                  <div
                    className="explore-link"
                    onClick={() => handleExplore(category)}
                  >
                    <span>Explore Collection</span>
                    <ChevronRight className="chevron" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default Categories;
