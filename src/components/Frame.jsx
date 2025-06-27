import React from "react";
import FrameByFramePreview from "./FrameByFramePreview";

const movieFrameData = {
  godfather: [
    "https://image.tmdb.org/t/p/original/d4KNaTrltq6bpkFS01pYtyXa09m.jpg", 
    "https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg", 
    "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "https://image.tmdb.org/t/p/original/jdHsptJbtalEuVhCV5i7kSC3g0x.jpg", 
    "https://image.tmdb.org/t/p/original/ra8AmdbM29msIPQjToOT60LR63R.jpg", 
  ],

 romanHoliday: [
  'https://image.tmdb.org/t/p/original/6f50k0bAekjxDvVvGC1SupJSzf4.jpg', 
  'https://image.tmdb.org/t/p/original/4psf8OdNFLVGz185HG2Z5vOYXmu.jpg', 
  'https://image.tmdb.org/t/p/original/2H9B5SGxgFoXWzMBcXYEI8WCUBB.jpg', 
  'https://image.tmdb.org/t/p/original/9p2oLEbktIrmwaZWRJkUtuQiSH8.jpg',
  'https://image.tmdb.org/t/p/original/zA6YXJ6DndyQyk16WinpgSy5CK8.jpg', 
  'https://image.tmdb.org/t/p/original/aIQFhF4mH3mbInmf2C1Hgd0fokI.jpg', 
],

  psycho: [
    "https://image.tmdb.org/t/p/original/rRwD4MoBlkBXWQ6PDnbKRSU5dDu.jpg",
    "https://image.tmdb.org/t/p/original/fVJQjlTIEczbHKi4Uk11zBBMypb.jpg",
    "https://image.tmdb.org/t/p/original/gwY3drQFMVXCCMSJBY6g32viMIK.jpg",
    "https://image.tmdb.org/t/p/original/5YZfjWJWCYixkLiWYdREPFMNvr6.jpg",
    "https://image.tmdb.org/t/p/original/lMDi2xlVNEireqI9rw7jTXSxCjo.jpg",
  ],
  casablanca: [
    "https://image.tmdb.org/t/p/original/rrsG3xYrWifoduZtsIZ4ntoDfBY.jpg",
    "https://image.tmdb.org/t/p/original/87wqeMeUeMRLjsE1IWNKJcPlpuC.jpg",
    "https://image.tmdb.org/t/p/original/bln0pnieTax3KrEpG5ZjN3fi1sw.jpg",
    "https://image.tmdb.org/t/p/original/sylXi9qVR7pgBkqyFiDHdhWKuo9.jpg",
    "https://image.tmdb.org/t/p/original/ipb524EGkrNotAXRpX0PH6wQR5n.jpg",
    "https://image.tmdb.org/t/p/original/nYW1AEdFSaywWuyjkVxNTbJtHxI.jpg",
  ],
};

const classicMovies = [
  {
    id: 10,
    title: "The Godfather",
    image: "/assets/images/1970's/The Godfather 1972 movie.jpeg",
    rating: 9.2,
    description:
      "An epic tale of family, power, and betrayal, tracing the transformation of Michael Corleone into a ruthless mafia boss.",
    frameImages: movieFrameData.godfather,
  },
 {
  id: 11,
  title: "Roman Holiday",
  image: "/assets/images/romanholiday.jpg",
  rating: 8.0,
  description: "A princess escapes her royal duties and explores Rome with a journalist in this charming romantic classic.",
  frameImages: movieFrameData.romanHoliday,
},
  {
    id: 8,
    title: "Psycho",
    image: "/assets/images/American Psycho poster.jpg",
    rating: 8.5,
    description:
      "Alfred Hitchcock's psychological thriller that redefined horror with its shocking twists and unforgettable shower scene.",
    frameImages: movieFrameData.psycho,
  },
  {
    id: 9,
    title: "Casablanca",
    image: "/assets/images/Casablanca.jpeg",
    rating: 8.5,
    description:
      "A timeless love story set against the backdrop of WWII, featuring Humphrey Bogart and Ingrid Bergman.",
    frameImages: movieFrameData.casablanca,
  },
];

const Frame = () => {
  return (
    <div>
      <div
        style={{
          padding: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            padding: 20,
            color: "gold",
            fontSize:30,
            width: "100%",
            textAlign: "center",
          }}
        >
          🌟 Classic Movie Posters
        </h1>

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
