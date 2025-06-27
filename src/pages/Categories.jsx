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
    title: "Silent Era Classics",
    description: "Groundbreaking films from cinema's earliest years",
    iconType: 'Film', // You'll need to import Film icon from lucide-react
    
    color: "linear-gradient(to top, #6b7280, #1f2937)",
    image: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg",
    movies: [
      { title: "Metropolis", year: 1927, director: "Fritz Lang" },
      { title: "The Cabinet of Dr. Caligari", year: 1920, director: "Robert Wiene" },
      { title: "Nosferatu", year: 1922, director: "F.W. Murnau" },
      { title: "The General", year: 1926, director: "Buster Keaton" }
    ]
  },
  {
    id: 2,
    title: "Golden Dawn",
    description: "The birth of Hollywood's golden age",
    iconType: 'Sunrise', // You'll need to import Sunrise icon
    
    color: "linear-gradient(to top, #f59e0b, #d97706)",
    image: "https://images.pexels.com/photos/3807697/pexels-photo-3807697.jpeg",
    movies: [
      { title: "City Lights", year: 1931, director: "Charlie Chaplin" },
      { title: "King Kong", year: 1933, director: "Merian C. Cooper" },
      { title: "It Happened One Night", year: 1934, director: "Frank Capra" },
      { title: "Gone with the Wind", year: 1939, director: "Victor Fleming" }
    ]
  },
  {
    id: 3,
    title: "War & Drama",
    description: "Powerful stories from the battlefield and beyond",
    iconType: 'Sword',
    
    color: "linear-gradient(to top, #991b1b, #7f1d1d)",
    image: "https://images.pexels.com/photos/3807701/pexels-photo-3807701.jpeg",
    movies: [
      { title: "Paths of Glory", year: 1957, director: "Stanley Kubrick" },
      { title: "The Bridge on the River Kwai", year: 1957, director: "David Lean" },
      { title: "Apocalypse Now", year: 1979, director: "Francis Ford Coppola" },
      { title: "Saving Private Ryan", year: 1998, director: "Steven Spielberg" }
    ]
  },
  {
    id: 4,
    title: "Technicolor Dreams",
    description: "Vibrant color films that defined an era",
    iconType: 'Palette', // You'll need to import Palette ico
    color: "linear-gradient(to top, #9333ea, #6b21a8)",
    image: "https://images.pexels.com/photos/3807705/pexels-photo-3807705.jpeg",
    movies: [
      { title: "The Wizard of Oz", year: 1939, director: "Victor Fleming" },
      { title: "Singin' in the Rain", year: 1952, director: "Stanley Donen" },
      { title: "An American in Paris", year: 1951, director: "Vincente Minnelli" },
      { title: "The Red Shoes", year: 1948, director: "Michael Powell" }
    ]
  },
  {
    id: 5,
    title: "New Wave Revolution",
    description: "Innovative films that broke cinematic conventions",
    iconType: 'WaveSquare', // You'll need to import WaveSquare icon
    
    color: "linear-gradient(to top, #2563eb, #1e40af)",
    image: "https://images.pexels.com/photos/3807710/pexels-photo-3807710.jpeg",
    movies: [
      { title: "Breathless", year: 1960, director: "Jean-Luc Godard" },
      { title: "The 400 Blows", year: 1959, director: "François Truffaut" },
      { title: "Jules and Jim", year: 1962, director: "François Truffaut" },
      { title: "Cleo from 5 to 7", year: 1962, director: "Agnès Varda" }
    ]
  },
  {
    id: 6,
    title: "Auteur Era",
    description: "Visionary directors and their signature styles",
    iconType: 'Camera', // You'll need to import Camera icon
    
    color: "linear-gradient(to top, #047857, #065f46)",
    image: "https://images.pexels.com/photos/3807715/pexels-photo-3807715.jpeg",
    movies: [
      { title: "Citizen Kane", year: 1941, director: "Orson Welles" },
      { title: "8½", year: 1963, director: "Federico Fellini" },
      { title: "Persona", year: 1966, director: "Ingmar Bergman" },
      { title: "Stalker", year: 1979, director: "Andrei Tarkovsky" }
    ]
  }
];
  

  const getIconComponent = (iconType) => {
    const iconMap = {
      'Eye': Eye,
      'Heart': Heart,
      'Music': Music,
      'Sword': Sword,
      'Smile': Smile,
      'Award': Award
    };
    return iconMap[iconType] || Eye;
  };

  const handleExplore = (category) => {
    const serializableCategory = {
      id: category.id,
      title: category.title,
      description: category.description,
      iconType: category.iconType,
    
      color: category.color,
      image: category.image,
      movies: category.movies
    };
    navigate('/movies', { state: { category: serializableCategory } });
  };

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Film Categories</h2>
        <div className="categories-grid">
          {mainCategories.map((category, index) => {
            const IconComponent = getIconComponent(category.iconType);
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
                    <div className="">
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

                {/* Film strip decoration */}
                <div className="film-strip-decoration">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="film-perforation"></div>
                  ))}
                </div>

                {/* Art Deco corners */}
                <div className="art-deco-corner top-left"></div>
                <div className="art-deco-corner top-right"></div>
                <div className="art-deco-corner bottom-left"></div>
                <div className="art-deco-corner bottom-right"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;