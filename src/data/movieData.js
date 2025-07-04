const movieData = [
  {
    id: 71,
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
    id: 72,
    title: "The Wizard of Oz",
    image: "/assets/images/The wizard of Oz.jpeg",
    rating: 8.1,
    description:
      "A groundbreaking narrative exploring the life of media tycoon Charles Foster Kane.",
    trailer: "https://www.youtube.com/embed/vQLNS3HWfCM",
    cast: [
      { name: "Judy Garland", image: "/assets/images/cast/Judy garland.jpeg" },
      { name: "Jack Haley", image: "/assets/images/cast/Jack Haley.jpeg" },
      { name: "Ray Bolger", image: "/assets/images/cast/Ray Bolger.jpeg" },
    ],
  },
  {
    id: 73,
    title: "Casablanca",
    image: "/assets/images//Casablancaa.jpeg",
    rating: 8.5,
    description:
      "In the midst of WWII, a nightclub owner in Casablanca must choose between love and virtue.",
    trailer: "https://www.youtube.com/embed/BkL9l7qovsE",
    cast: [
      {
        name: "Humphrey Bogart",
        image: "/assets/images/cast/Humphrey Bogart.jpeg",
      },
      {
        name: "Ingrid Bergman",
        image: "/assets/images/cast/Ingrid Bergman.jpeg",
      },
      { name: "Paul Henreid", image: "/assets/images/cast/Paul Henreid.jpeg" },
    ],
  },
  {
    id: 74,
    title: "Vertigo",
    image: "/assets/images/VERTIGO.jpeg",
    rating: 8.3,
    description:
      "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.",
    trailer: "https://www.youtube.com/embed/UcTlJxN3Q20",
    cast: [
      {
        name: "James Stewart",
        image: "/assets/images/cast/James Stewart.jpeg",
      },
      { name: "Kim Novak", image: "/assets/images/cast/Kim Novak.jpeg" },
      {
        name: "Barbara Bel Geddes",
        image: "/assets/images/cast/Barbara Bel Geddes.jpeg",
      },
    ],
  },
  {
    id: 75,
    title: "2001: A Space Odyssey",
    image: "/assets/images/a space.jpeg",
    rating: 8.3,
    description:
      "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins.",
    trailer: "https://www.youtube.com/embed/oR_e9y-bka0",
    cast: [
      { name: "Keir Dullea", image: "/assets/images/cast/Keir Dullea.jpeg" },
      {
        name: "Gary Lockwood",
        image: "/assets/images/cast/Gray lockwood.jpeg",
      },
      {
        name: "William Sylvester",
        image: "/assets/images/cast/William Sylvester.jpeg",
      },
    ],
  },
  {
    id: 76,
    title: "The Godfather",
    image: "/assets/images/1970's/The Godfather 1972.jpeg",
    rating: 9.2,
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
    cast: [
      {
        name: "Marlon Brando",
        image: "/assets/images/cast/Marlon Brando.jpeg",
      },
      { name: "Al Pacino", image: "/assets/images/cast/Al Pacino.jpeg" },
      { name: "James Caan", image: "/assets/images/cast/James Caan.jpeg" },
    ],
  },
  {
    id: 77,
    title: "Star Wars",
    image: "/assets/images/Star warss.jpeg",
    rating: 8.6,
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire.",
    trailer: "https://www.youtube.com/embed/vZ734NWnAHA",
    cast: [
      { name: "Mark Hamill", image: "/assets/images/cast/Mark Hamill.jpeg" },
      {
        name: "Harrison Ford",
        image: "/assets/images/cast/Harrison Ford.jpeg",
      },
      {
        name: "Carrie Fisher",
        image: "/assets/images/cast/Carrie Fisher.jpeg",
      },
    ],
  },
  {
    id: 78,
    title: "Jaws",
    image: "/assets/images/1970's/Jaws 1975.jpeg",
    rating: 8.0,
    description:
      "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    trailer: "https://www.youtube.com/embed/U1fu_sA7XhE",
    cast: [
      { name: "Roy Scheider", image: "/assets/images/cast/Roy Scheider.jpeg" },
      { name: "Robert Shaw", image: "/assets/images/cast/Robert Shaw.jpeg" },
      {
        name: "Richard Dreyfuss",
        image: "/assets/images/cast/Richard Dreyfuss.jpeg",
      },
    ],
  },
  {
    id: 79,
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
    id: 80,
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
    id: 81,
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
    id: 82,
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
    id: 83,
    title: "Greed",
    poster: "/assets/images/1920's/the General_1926.jpeg",
    rating: 8.0,
    description:
      "A dentist's life descends into obsession and tragedy after winning a lottery ticket in this gritty silent masterpiece.",
    trailer: "https://www.youtube.com/embed/2e-eXJ6HgkQ",
    cast: [
      { name: "Gibson Gowland", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Zasu Pitts", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Jean Hersholt", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 1,
    title: "The Gold Rush",
    image: "/assets/images/1920's/Gold Rush_1925.jpeg",
    rating: 8.2,
    description:
      "The Tramp ventures into the Klondike in search of gold and finds love and mischief in this iconic silent comedy.",
    trailer: "https://www.youtube.com/embed/vQLNS3HWfCM",
    cast: [
      { name: "Charlie Chaplin", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Georgia Hale", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Mack Swain", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 2,
    title: "Metropolis",
    image: "/assets/images/1920's/Metropolis_1927.jpeg",
    rating: 8.3,
    description:
      "In a futuristic dystopia, a man discovers the harsh realities faced by the working class beneath a gleaming city.",
    trailer: "https://www.youtube.com/embed/BkL9l7qovsE",
    cast: [
      { name: "Brigitte Helm", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Alfred Abel", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Gustav Fröhlich", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 3,
    title: "Safety Last!",
    image: "/assets/images/1920's/Safety Last! (1923).jpeg",
    rating: 8.1,
    description:
      "A small-town man tries to make it big in the city, leading to one of the most famous clock-hanging scenes in film history.",
    trailer: "https://www.youtube.com/embed/UcTlJxN3Q20",
    cast: [
      { name: "Harold Lloyd", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Mildred Davis", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Bill Strother", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 4,
    title: "The Crowd",
    image: "/assets/images/1920's/The Crowd_1928.jpeg",
    rating: 7.9,
    description:
      "A realistic and touching portrayal of a man's struggles within the indifferent machinery of modern urban life.",
    trailer: "https://www.youtube.com/embed/oR_e9y-bka0",
    cast: [
      { name: "James Murray", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Eleanor Boardman", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Bert Roach", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 5,
    title: "The General",
    image: "/assets/images/1920's/The General_1926.jpeg",
    rating: 8.1,
    description:
      "During the American Civil War, a train engineer goes to great lengths to rescue his stolen locomotive and love.",
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
    cast: [
      { name: "Buster Keaton", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Marion Mack", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Glen Cavender", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 6,
    title: "The Jazz Singer",
    image: "/assets/images/1920's/The Jazz Singer, 1927.jpeg",
    rating: 7.0,
    description:
      "The first feature-length film with synchronized dialogue, following a young man torn between tradition and show business.",
    trailer: "https://www.youtube.com/embed/vZ734NWnAHA",
    cast: [
      { name: "Al Jolson", image: "/assets/images/cast/Jack.jpeg" },
      { name: "May McAvoy", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Warner Oland", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 7,
    title: "The Kid",
    image: "/assets/images/1920's/The kid (1921).jpeg",
    rating: 8.3,
    description:
      "The Tramp finds an abandoned child and raises him as his own in one of Chaplin's most heartfelt films.",
    trailer: "https://www.youtube.com/embed/U1fu_sA7XhE",
    cast: [
      { name: "Charlie Chaplin", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Jackie Coogan", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Edna Purviance", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 8,
    title: "Way Down East",
    image: "/assets/images/1920's/Way Down East (1920).jpeg",
    rating: 7.6,
    description:
      "A young woman faces deception and social ostracism, culminating in a legendary rescue on an icy river.",
    trailer: "https://www.youtube.com/embed/0dTsfsr6-X8",
    cast: [
      { name: "Lillian Gish", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Richard Barthelmess", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Lowell Sherman", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
  {
    id: 9,
    title: "Wings",
    image: "/assets/images/1920's/Wings_1927.jpeg",
    rating: 7.5,
    description:
      "Two World War I fighter pilots face love and tragedy in the first film to win the Academy Award for Best Picture.",
    trailer: "https://www.youtube.com/embed/zyv19bg0scg",
    cast: [
      { name: "Clara Bow", image: "/assets/images/cast/Jack.jpeg" },
      { name: "Charles Rogers", image: "/assets/images/cast/Rose.jpeg" },
      { name: "Richard Arlen", image: "/assets/images/cast/BillyZane.jpeg" },
    ],
  },
];

export default movieData;
