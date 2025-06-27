const movieData = [
  {
    id: 1,
    title: "Titanic",
    image: "/assets/images/Titanic.jpeg",
    rating: 8.5,
    description:
      "A timeless love story set aboard the doomed RMS Titanic, featuring Leonardo DiCaprio and Kate Winslet.",
    trailer: "https://www.youtube.com/embed/2e-eXJ6HgkQ",
    cast: [
      { name: "Leonardo DiCaprio", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Kate Winslet", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Billy Zane", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 2,
    title: "The NoteBook",
    image: "/assets/images/NoteBook.jpeg",
    rating: 8.2,
    description:
      "An epic romance set during the American Civil War, chronicling the turbulent love of Scarlett O'Hara and Rhett Butler.",
    trailer: "https://www.youtube.com/embed/0dTsfsr6-X8",
    cast: [
      { name: "Ryan Gosling", image: "/assets/images/cast/RyanGosling.jpeg" },
      {
        name: "Rachel McAdams",
        image: "/assets/images/cast/RachelMcAdams.jpeg",
      },
      { name: "James Garner", image: "/assets/images/cast/JamesGarner.jpeg" },
    ],
  },
  {
    id: 3,
    title: "Atonement",
    image: "/assets/images/Atonement.jpeg",
    rating: 8.3,
    description:
      "A groundbreaking narrative exploring the life of media tycoon Charles Foster Kane.",
    trailer: "https://www.youtube.com/embed/zyv19bg0scg",
    cast: [
      { name: "James McAvoy", image: "/assets/images/cast/JamesMcAvoy.jpeg" },
      {
        name: "Keira Knightley",
        image: "/assets/images/cast/KeiraKnightley.jpeg",
      },
      { name: "Saoirse Ronan", image: "/assets/images/cast/SaoirseRonan.jpeg" },
    ],
  },
  {
    id: 4,
    title: "Romeo and Juliet",
    image: "/assets/images/Romeo and Juliet.jpeg",
    rating: 8.3,
    description:
      "A joyful musical about Hollywood's transition from silent films to talkies.",
    trailer: "https://www.youtube.com/embed/D1ZYhVpdXbQ",
    cast: [
      {
        name: "Leonard Whiting",
        image: "/assets/images/cast/LeonardWhiting.jpeg",
      },
      { name: "Olivia Hussey", image: "/assets/images/cast/OliviaHussey.jpeg" },
      { name: "John McEnery", image: "/assets/images/cast/JohnMcEnery.jpeg" },
    ],
  },
  {
    id: 5,
    title: "Pearl Harber",
    image: "/assets/images/Pearl Harber.jpeg",
    rating: 9.0,
    description:
      "A powerful courtroom drama where one juror stands alone in the pursuit of justice.",
    trailer: "https://www.youtube.com/embed/_13J_9B5jEk",
    cast: [
      { name: "Ben Affleck", image: "/assets/images/cast/BenAffleck.jpeg" },
      { name: "Josh Hartnett", image: "/assets/images/cast/JoshHartnett.jpeg" },
      {
        name: "Kate Beckinsale",
        image: "/assets/images/cast/KateBeckinsale.jpeg",
      },
    ],
  },
  {
    id: 6,
    title: "The Godfather",
    image: "/assets/images/1970's/The Godfather 1972 movie.jpeg",
    rating: 9.2,
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
    cast: [
      { name: "Marlon Brando", image: "/assets/images/cast/MarlonBrando.jpeg" },
      { name: "Al Pacino", image: "/assets/images/cast/AlPacino.jpeg" },
      { name: "James Caan", image: "/assets/images/cast/JamesCaan.jpeg" },
    ],
  },
  {
    id: 7,
    title: "Star Wars",
    image: "/assets/images/1970's/Star Wars 1977 movie.jpeg",
    rating: 8.6,
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire.",
    trailer: "https://www.youtube.com/embed/8C9TQ9t6cBA",
    cast: [
      { name: "Mark Hamill", image: "/assets/images/cast/MarkHamill.jpeg" },
      { name: "Harrison Ford", image: "/assets/images/cast/HarrisonFord.jpeg" },
      { name: "Carrie Fisher", image: "/assets/images/cast/CarrieFisher.jpeg" },
    ],
  },
  {
    id: 8,
    title: "Jaws",
    image: "/assets/images/1970's/Jaws 1975 movie.jpeg",
    rating: 8.0,
    description:
      "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    trailer: "https://www.youtube.com/embed/U1fu_sA7XhE",
    cast: [
      { name: "Roy Scheider", image: "/assets/images/cast/RoyScheider.jpeg" },
      { name: "Robert Shaw", image: "/assets/images/cast/RobertShaw.jpeg" },
      {
        name: "Richard Dreyfuss",
        image: "/assets/images/cast/RichardDreyfuss.jpeg",
      },
    ],
  },
];

export default movieData;
