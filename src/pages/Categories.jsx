import React, { useState } from 'react';
import { Eye, Heart, Music, Sword, Smile, Award, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/Categories.scss';

const Categories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const mainCategories = [
    {
      id: 1,
      title: "Film Noir",
      description: "Dark tales of crime and mystery",
      icon: Eye,
      count: "45 F11.m",
      color: "linear-gradient(to top, #4b5563, #000000)",
      image: "https://images.pexels.com/photos/7991462/pexels-photo-7991462.jpeg",
      movies: [
        { title: "The Maltese Falcon", year: 1941, director: "John Huston" },
        { title: "Double Indemnity", year: 1944, director: "Billy Wilder" },
        { title: "Sunset Boulevard", year: 1950, director: "Billy Wilder" },
        { title: "The Big Sleep", year: 1946, director: "Howard Hawks" }
      ]
    },
    {
      id: 2,
      title: "Golden Age Romance",
      description: "Timeless love stories",
      icon: Heart,
      count: "62 F11.m",
      color: "linear-gradient(to top, #e11d48, #b45309)",
      image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
      movies: [
        { title: "Casablanca", year: 1942, director: "Michael Curtiz" },
        { title: "Gone with the Wind", year: 1939, director: "Victor Fleming" },
        { title: "Roman Holiday", year: 1953, director: "William Wyler" },
        { title: "An Affair to Remember", year: 1957, director: "Leo McCarey" }
      ]
    },
    {
      id: 3,
      title: "Classic Musicals",
      description: "Song and dance spectacles",
      icon: Music,
      count: "38 F11.m",
      color: "linear-gradient(to top, #9333ea, #d97706)",
      image: "https://images.pexels.com/photos/7991686/pexels-photo-7991686.jpeg",
      movies: [
        { title: "Singin' in the Rain", year: 1952, director: "Stanley Donen" },
        { title: "The Sound of Music", year: 1965, director: "Robert Wise" },
        { title: "West Side Story", year: 1961, director: "Robert Wise" },
        { title: "My Fair Lady", year: 1964, director: "George Cukor" }
      ]
    },
    {
      id: 4,
      title: "Epic Adventures",
      description: "Grand tales of heroism",
      icon: Sword,
      count: "29 F11.m",
      color: "linear-gradient(to top, #ea580c, #b91c1c)",
      image: "https://images.pexels.com/photos/8111520/pexels-photo-8111520.jpeg",
      movies: [
        { title: "Lawrence of Arabia", year: 1962, director: "David Lean" },
        { title: "Ben-Hur", year: 1959, director: "William Wyler" },
        { title: "Spartacus", year: 1960, director: "Stanley Kubrick" },
        { title: "The Ten Commandments", year: 1956, director: "Cecil B. DeMille" }
      ]
    },
    {
      id: 5,
      title: "Screwball Comedy",
      description: "Witty dialogue and romance",
      icon: Smile,
      count: "41 F11.m",
      color: "linear-gradient(to top, #ca8a04, #d97706)",
      image: "https://images.pexels.com/photos/8111543/pexels-photo-8111543.jpeg",
      movies: [
        { title: "Bringing Up Baby", year: 1938, director: "Howard Hawks" },
        { title: "His Girl Friday", year: 1940, director: "Howard Hawks" },
        { title: "The Philadelphia Story", year: 1940, director: "George Cukor" },
        { title: "It Happened One Night", year: 1934, director: "Frank Capra" }
      ]
    },
    {
      id: 6,
      title: "War Dramas",
      description: "Stories of courage and sacrifice",
      icon: Award,
      count: "33 F11.m",
      color: "linear-gradient(to top, #15803d, #b45309)",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
      movies: [
        { title: "The Bridge on the River Kwai", year: 1957, director: "David Lean" },
        { title: "Paths of Glory", year: 1957, director: "Stanley Kubrick" },
        { title: "From Here to Eternity", year: 1953, director: "Fred Zinnemann" },
        { title: "The Great Escape", year: 1963, director: "John Sturges" }
      ]
    }
  ];

  const handleExplore = (category) => {
    navigate('/movies', { state: { category } });
  };

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Film Categories</h2>
        <div className="categories-grid">
          {mainCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`category-card ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-image-container">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="card-image"
                  />
                  <div className="image-overlay" style={{ background: category.color }}></div>
                  
                  {hoveredCard !== index && (
                    <div className="film-count">
                      <span>{category.count}</span>
                    </div>
                  )}
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
  );
};

export default Categories;