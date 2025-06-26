import React from 'react';
import FrameByFramePreview from './FrameByFramePreview';


// IMPORTANT: Replace the placeholder URLs below with actual frame images for each movie.
const movieFrameData = {
  casablanca: [
    'https://image.tmdb.org/t/p/original/bL2qgL9N7t1yS1r7K1t8Rk2n8wY.jpg',
    'https://image.tmdb.org/t/p/original/jG2ZfI3Q7eP8bJ5N9uS2rY6f0hO.jpg',
    'https://image.tmdb.org/t/p/original/4u2fB7V0xQz6sX0x7z9cQ8z1e1P.jpg',
    'https://image.tmdb.org/t/p/original/eJ2c9j9n0tJ9w7t3Y4d2d4e8b8z.jpg',
    'https://image.tmdb.org/t/p/original/d7e0c4t3z8g9m6k5e1o2f2t3u4v.jpg',
  ],
  singinInTheRain: [
    'https://flxt.tmsimg.com/assets/p1810_p_v8_aa.jpg',
    'https://flxt.tmsimg.com/assets/p1810_p_v8_aa.jpg',
    'https://flxt.tmsimg.com/assets/p1810_p_v8_aa.jpg',
    'https://flxt.tmsimg.com/assets/p1810_p_v8_aa.jpg',
    'https://flxt.tmsimg.com/assets/p1810_p_v8_aa.jpg',
  ],
  '12AngryMen': [
    'https://m.media-amazon.com/images/M/MV5BMWZiESBmMjMtMjYwMS00NTA1LTk2OTgtNzcwZDYxMDc1YzY5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMWZiESBmMjMtMjYwMS00NTA1LTk2OTgtNzcwZDYxMDc1YzY5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMWZiESBmMjMtMjYwMS00NTA1LTk2OTgtNzcwZDYxMDc1YzY5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMWZiESBmMjMtMjYwMS00NTA1LTk2OTgtNzcwZDYxMDc1YzY5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMWZiESBmMjMtMjYwMS00NTA1LTk2OTgtNzcwZDYxMDc1YzY5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
  ],
  rearWindow: [
    'https://m.media-amazon.com/images/M/MV5BMjMwMjczMzA3M15BMl5BanBnXkFtZTgwNzY0MTcwMzE@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwMjczMzA3M15BMl5BanBnXkFtZTgwNzY0MTcwMzE@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwMjczMzA3M15BMl5BanBnXkFtZTgwNzY0MTcwMzE@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwMjczMzA3M15BMl5BanBnXkFtZTgwNzY0MTcwMzE@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwMjczMzA3M15BMl5BanBnXkFtZTgwNzY0MTcwMzE@._V1_.jpg',
  ],
  booksmart: [
    'https://m.media-amazon.com/images/M/MV5BMTgxNDYyMzMxMV5BMl5BanBnXkFtZTgwODEzNjM2NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTgxNDYyMzMxMV5BMl5BanBnXkFtZTgwODEzNjM2NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTgxNDYyMzMxMV5BMl5BanBnXkFtZTgwODEzNjM2NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTgxNDYyMzMxMV5BMl5BanBnXkFtZTgwODEzNjM2NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTgxNDYyMzMxMV5BMl5BanBnXkFtZTgwODEzNjM2NjM@._V1_.jpg',
  ],
};


const classicMovies = [
  {
    id: 1,
    title: "Casablanca",
    image: "/assets/images/Casablanca.jpeg",
    rating: 8.5,
    description:
      "A timeless love story set against the backdrop of WWII, featuring Humphrey Bogart and Ingrid Bergman.",
    frameImages: movieFrameData.casablanca,
  },
  {
    id: 2,
    title: "Singin' in the Rain",
    image: "/assets/images/SinginInTheRain.jpeg", // Corrected image path example
    rating: 8.3,
    description:
      "A joyful musical about the transition from silent films to talkies, with iconic dance scenes and humor.",
    frameImages: movieFrameData.singinInTheRain,
  },
  {
    id: 3,
    title: "12 Angry Men",
    image: "/assets/images/12AngryMen.jpeg", // Corrected image path example
    rating: 9.0,
    description:
      "A tense courtroom drama exploring justice and reasonable doubt inside a jury room.",
    frameImages: movieFrameData['12AngryMen'], // Use bracket notation for keys starting with a number
  },
  {
    id: 4,
    title: "Rear Window",
    image: "/assets/images/RearWindow.jpeg", // Corrected image path example
    rating: 8.5,
    description:
      "Hitchcock’s suspense classic about a man spying on his neighbors who suspects murder.",
    frameImages: movieFrameData.rearWindow,
  },
  {
    id: 5,
    title: "Booksmart",
    image: "/assets/images/Booksmart.jpeg", // Corrected image path example
    rating: 7.1,
    description:
      "Two teens try to cram four years of fun into one night before graduation. A modern cult classic.",
    frameImages: movieFrameData.booksmart,
  },
];


const Frame = () => {
  return (
    <div>
      <div style={{ padding: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <h2 style={{ fontFamily: "'Cinzel Decorative', serif", color: 'gold', width: '100%', textAlign: 'center' }}>
          🌟 Classic Movie Posters
        </h2>

        {/* Displaying Classic Movies */}
        {classicMovies.map((movie) => (
          <FrameByFramePreview
            key={movie.id}
            poster={movie.image}
            frameImages={movie.frameImages}
          />
        ))}
      </div>
    </div>
  );
};

export default Frame;