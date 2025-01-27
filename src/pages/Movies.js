import React, { useState } from "react";
import { Filter, Star, Play, X, Clock, Calendar, Heart } from "lucide-react";
import civilwar from "../images/civilwar.jpg";
import badboys from "../images/badboys.jpg";
import nineteen from "../images/1917.jpg";
import godzilla from "../images/godzilla.jpg";
import anyone from "../images/anyone.jpg";
import migration from "../images/migration.jpg";
import thezone from "../images/thezone.jpg";
import napoleon from "../images/napoleon.jpg";
import bewithyou from "../images/bewithyou.jpg";
import carter from "../images/carter.jpg";
import spacesweepers from "../images/spacesweepers.jpg";
import timetohunt from "../images/timetohunt.jpg";
import backinaction from "../images/backinaction.jpg";
import theinvitation from "../images/theinvitation.jpg";
import eastern from "../images/easternpromises.jpg";
import kingdom4 from "../images/kingdom4.jpg";
import sonic from "../images/sonic.jpg";
import advitam from "../images/advitam.jpg";
import knight from "../images/knightandday.jpg";
import thesecret from "../images/thesecret.jpg";
import thecreator from "../images/thecreator.jpg";
import rewind from "../images/rewind.jpg";
import officerblackbelt from "../images/officerblackbelt.jpg";
import badlandhunters from "../images/badlandhunters.jpg";

const Movies = () => {
  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Thriller",
    "Romance",
  ];

  const movies = [
    {
      id: 1,
      title: "Bad Boys: Ride or Die",
      genre: "Action, Comedy",
      rating: "8.9",
      image: badboys,
      description:
        "Detectives Mike Lowrey and Marcus Burnett join forces with a skilled but troubled cop to take down a dangerous drug lord who's seeking revenge.",
      director: "Adil El Arbi, Bilall Fallah",
      cast: ["Will Smith", "Martin Lawrence", "Vanessa Hudgens"],
      duration: "1h 55m",
      releaseDate: "June 7, 2024",
    },
    {
      id: 2,
      title: "Civil War",
      genre: "Action",
      rating: "8.3",
      image: civilwar,
      description:
        "A near-future dystopian thriller that follows a group of journalists traveling across a fractured United States during an escalating civil war.",
      director: "Alex Garland",
      cast: ["Kirsten Dunst", "Wagner Moura", "Nick Offerman"],
      duration: "1h 49m",
      releaseDate: "April 12, 2024",
    },
    {
      id: 3,
      title: "1917",
      genre: "War, History, Drama",
      rating: "8.5",
      image: nineteen,
      description:
        "Two young British soldiers during the First World War are given an impossible mission to deliver a message that will stop 1,600 men from walking into a deadly trap.",
      director: "Sam Mendes",
      cast: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"],
      duration: "1h 59m",
      releaseDate: "January 10, 2020",
    },
    {
      id: 4,
      title: "Godzilla x Kong: The New Empire",
      genre: "Action, Science Fiction",
      rating: "8.1",
      image: godzilla,
      description:
        "Two ancient titans, Godzilla and Kong, join forces to face an emerging threat to humanity while uncovering a mysterious conspiracy.",
      director: "Adam Wingard",
      cast: ["Rebecca Hall", "Brian Tyree Henry", "Dan Stevens"],
      duration: "2h 15m",
      releaseDate: "March 29, 2024",
    },
    {
      id: 5,
      title: "Anyone But You",
      genre: "Comedy, Romance",
      rating: "7.6",
      image: anyone,
      description:
        "After a great first date, Bea and Ben's chemistry is suddenly extinguished, but a twist of fate forces them to reunite in Australia.",
      director: "Will Gluck",
      cast: ["Sydney Sweeney", "Glen Powell", "Alexandra Shipp"],
      duration: "1h 43m",
      releaseDate: "December 22, 2023",
    },
    {
      id: 6,
      title: "Migration",
      genre: "Comedy, Family, Animation, Adventure",
      rating: "7.8",
      image: migration,
      description:
        "An animated adventure about a family of ducks who convince their overprotective father to go on the vacation of a lifetime.",
      director: "Benjamin Renner",
      cast: ["Kumail Nanjiani", "Elizabeth Banks", "Keegan-Michael Key"],
      duration: "1h 32m",
      releaseDate: "December 22, 2023",
    },
    {
      id: 7,
      title: "The Zone of Interest",
      genre: "Drama",
      rating: "7.9",
      image: thezone,
      description:
        "A chilling look at the lives of a Nazi commandant and his family living next to Auschwitz concentration camp.",
      director: "Jonathan Glazer",
      cast: ["Sandra Hüller", "Christian Friedel", "Freya Kreutzkamm"],
      duration: "1h 46m",
      releaseDate: "December 15, 2023",
    },
    {
      id: 8,
      title: "Napoleon",
      genre: "History, War, Romance",
      rating: "7.5",
      image: napoleon,
      description:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power.",
      director: "Ridley Scott",
      cast: ["Joaquin Phoenix", "Vanessa Kirby", "Tahar Rahim"],
      duration: "2h 38m",
      releaseDate: "November 22, 2023",
    },
    {
      id: 9,
      title: "Be With You",
      genre: "Drama, Romance",
      rating: "8.3",
      image: bewithyou,
      description:
        "A heartwarming love story about a woman who passes away and returns a year later to be with her husband and child, despite having no memory of the time she spent with them.",
      director: "Lee Jang-hoon",
      cast: ["Son Ye Jin", "So Ji Sub", "Kim Ji Hwan"],
      duration: "1h 58m",
      releaseDate: "March 14, 2018",
    },
    {
      id: 10,
      title: "Space Sweepers",
      rating: "8.3",
      genre: "Science Fiction, Drama, Fantasy",
      duration: "2h 16m",
      releaseDate: "02/05/2021 (KR)",
      image: spacesweepers,
      description:
        "In the year 2092, a ragtag crew aboard a space junk collector ship discovers a young girl who holds the key to humanity's survival in a dystopian universe.",
      director: "Jo Sung-hee",
      cast: ["Song Joong-ki", "Kim Tae-ri", "Jin Seon-kyu", "Yoo Hae-jin"],
    },
    {
      id: 11,
      title: "Carter",
      rating: "8.0",
      genre: "Action, Crime, Thriller",
      duration: "2h 12m",
      releaseDate: "08/05/2022 (KR)",
      image: carter,
      description:
        "A man with no memory wakes up in a chaotic world and must embark on a high-stakes mission while uncovering the truth about his past.",
      director: "Jung Byung-gil",
      cast: ["Joo Won", "Lee Sung-jae", "Jeong So-ri"],
    },
    {
      id: 12,
      title: "Time to Hunt",
      rating: "8.4",
      genre: "Drama, Action, Thiller",
      duration: "2h 14m",
      releaseDate: "04/23/2020 (KR)",
      image: timetohunt,
      description:
        "In a dystopian near-future, a group of young men plan a heist to escape poverty but find themselves hunted by a ruthless assassin.",
      director: "Yoon Sung-hyun",
      cast: ["Lee Je-hoon", "Ahn Jae-hong", "Choi Woo-shik", "Park Jung-min"],
    },

    {
      id: 13,
      title: "Back in Action",
      genre: "Action, Adventure, Comedy",
      rating: "8.5",
      image: backinaction,
      description:
        "Two estranged siblings reunite for one last high-stakes mission, rediscovering their bond while navigating a dangerous world of espionage.",
      director: "John Doe",
      cast: ["Jamie Foxx", "Cameron Diaz", "Kyle Chandler"],
      duration: "1h 54m",
      releaseDate: "January 17, 2024",
    },
    {
      id: 14,
      title: "The Invitation",
      genre: "Horror, Thriller",
      rating: "8.3",
      image: theinvitation,
      description:
        "A woman is invited to a lavish wedding in England, only to discover dark family secrets that threaten her survival.",
      director: "Jessica M. Thompson",
      cast: ["Nathalie Emmanuel", "Thomas Doherty", "Stephanie Corneliussen"],
      duration: "1h 45m",
      releaseDate: "August 26, 2022",
    },
    {
      id: 15,
      title: "Eastern Promises",
      genre: "Crime, Thriller",
      rating: "8.1",
      image: eastern,
      description:
        "A midwife in London becomes entangled with the Russian mafia while investigating the mysterious death of a young girl.",
      director: "David Cronenberg",
      cast: ["Viggo Mortensen", "Naomi Watts", "Vincent Cassel"],
      duration: "1h 41m",
      releaseDate: "October 26, 2007",
    },
    {
      id: 16,
      title: "Kingdom IV: Return of the Great General",
      genre: "Action, Historical",
      rating: "8.0",
      image: kingdom4,
      description:
        "The thrilling saga continues as the young king rallies his forces to reclaim his kingdom and fulfill his destiny.",
      director: "Shinsuke Sato",
      cast: ["Kento Yamazaki", "Ryo Yoshizawa", "Masami Nagasawa"],
      duration: "2h 26m",
      releaseDate: "July 12, 2024",
    },
    {
      id: 17,
      title: "Sonic the Hedgehog 3",
      genre: "Action, Adventure, Comedy",
      rating: "8.4",
      image: sonic,
      description:
        "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before.",
      director: "Jeff Fowler",
      cast: ["Jim Carrey", "Ben Schwartz", "Keanu Reeves"],
      duration: "1h 50m",
      releaseDate: "January 15, 2025",
    },
    {
      id: 18,
      title: "Ad Vitam",
      genre: "Sci-Fi, Drama",
      rating: "7.9",
      image: advitam,
      description:
        "In a world where immortality is possible, a detective investigates the mysterious suicides of seven teenagers.",
      director: "Thomas Cailley",
      cast: ["Yvan Attal", "Garance Marillier", "Niels Schneider"],
      duration: "1h 37m",
      releaseDate: "January 10, 2025",
    },
    {
      id: 19,
      title: "Knight and Day",
      genre: "Action, Comedy",
      rating: "7.8",
      image: knight,
      description:
        "A chance encounter between a woman and a spy leads to a whirlwind adventure across the globe.",
      director: "James Mangold",
      cast: ["Tom Cruise", "Cameron Diaz", "Peter Sarsgaard"],
      duration: "1h 49m",
      releaseDate: "June 23, 2010",
    },
    {
      id: 20,
      title: "The Secret Life of Pets 2",
      genre: "Animation, Comedy, Family",
      rating: "7.7",
      image: thesecret,
      description:
        "Max the dog faces new challenges when his owner starts a family, while the other pets have adventures of their own.",
      director: "Chris Renaud",
      cast: ["Patton Oswalt", "Kevin Hart", "Harrison Ford"],
      duration: "1h 16m",
      releaseDate: "June 5, 2019",
    },
    {
      id: 21,
      title: "The Creator",
      genre: "Sci-Fi, Action",
      rating: "8.2",
      image: thecreator,
      description:
        "In a future where humans and artificial intelligence are at war, a former soldier is tasked with tracking down and destroying a powerful AI weapon, but things take an unexpected turn.",
      director: "Gareth Edwards",
      cast: ["John David Washington", "Gemma Chan", "Allison Janney"],
      duration: "2h 14m",
      releaseDate: "September 29, 2023",
    },
    {
      id: 22,
      title: "Rewind",
      genre: "Drama, Romance",
      rating: "9.2",
      image: rewind,
      description:
        "A heartwarming story of love and sacrifice that has inspired many viewers.",
      director: "Jose Javier Reyes",
      cast: ["Marian Rivera", "Dingdong Dantes"],
      duration: "1h 52m",
      releaseDate: "December 25, 2023",
    },
    {
      id: 23,
      title: "Officer Black Belt",
      genre: "Action, Comedy, Crime",
      rating: "8.5",
      duration: "1h 48m",
      releaseDate: "09/13/2024 (PH)",
      image: officerblackbelt,
      description:
        "A talented martial artist who can't walk past a person in need unites with a probation officer to fight and prevent crime as a martial arts officer.",
      director: "Jason Kim",
      cast: ["Kim Woo-bin", "Kim Sung-kyun", "Lee Hyun-gul"],
    },
    {
      id: 24,
      title: "Badland Hunters",
      genre: "Action, Adventure,Thriller",
      rating: "8.2",
      duration: "1h 47m",
      releaseDate: "01/25/2024 (KR)",
      image: badlandhunters,
      description:
        "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
      director: "Heo Myeong-haeng",
      cast: ["Don lee", "Lee Hee-jun", "Lee Jun-young"],
    },
  ];

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre.includes(selectedGenre))
    : movies;

  const openMovieModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieModal = () => {
    setSelectedMovie(null);
  };

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  return (
    <div className=" bg-gray-950/90">
      <div className="py-24 px-4 max-w-7xl mx-auto ">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Movies</h1>
          <button className="flex items-center space-x-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() =>
                setSelectedGenre(selectedGenre === genre ? null : genre)
              }
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full border transition text-xs sm:text-sm ${
                selectedGenre === genre
                  ? "bg-red-600 border-red-600"
                  : "border-gray-700 text-white hover:bg-red-600 hover:border-red-600"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="group cursor-pointer"
              onClick={() => openMovieModal(movie)}
            >
              <div className="relative rounded-lg overflow-hidden mb-2">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-sm md:text-base text-white font-semibold group-hover:text-red-600 transition">
                {movie.title}
              </h3>
              <div className="flex items-center justify-between text-xs md:text-sm">
                <span className="text-gray-400">{movie.genre}</span>
                <span className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  {movie.rating}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Movie Details Modal */}
        {selectedMovie && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto relative">
              <button
                onClick={closeMovieModal}
                className="absolute top-4 right-4 text-white hover:text-red-600 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="flex flex-col md:flex-row p-6">
                {/* Movie Poster */}
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                  <img
                    src={selectedMovie.image}
                    alt={selectedMovie.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Movie Details */}
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedMovie.title}
                  </h2>

                  <div className="space-y-4">
                    <div className="flex space-x-4 text-gray-300 mb-4">
                      <span>{selectedMovie.genre}</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {selectedMovie.duration}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {selectedMovie.releaseDate}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {selectedMovie.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                      <div>
                        <p className="text-gray-400">Cast</p>
                        <p className="text-white">
                          {selectedMovie.cast.join(", ")}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Director</p>
                        <p className="text-white">{selectedMovie.director}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition flex items-center justify-center space-x-2">
                        <Play className="w-5 h-5" />
                        <span>Watch Trailer</span>
                      </button>
                      <button
                        className="w-full border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center space-x-2"
                        onClick={() => toggleWatchlist(selectedMovie)}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            watchlist.some((m) => m.id === selectedMovie.id)
                              ? "text-red-500 fill-current"
                              : ""
                          }`}
                        />
                        <span>
                          {watchlist.some((m) => m.id === selectedMovie.id)
                            ? "Remove from Favorites"
                            : "Add to Favorites"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
