import React, { useState, useEffect } from "react";
import {
  Play,
  Star,
  TrendingUp,
  X,
  Heart,
  Clock,
  Calendar,
} from "lucide-react";
import dune from "../images/dune.jpg";
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
import poorThings from "../images/poorthings.jpg";
import venom from "../images/venom.jpg";
import oppenheimer from "../images/oppenheimer.jpg";
import rebel from "../images/rebel.jpg";
import rurouni from "../images/rurouni.jpg";
import upstream from "../images/upstream.jpg";

const Home = () => {
  const featuredMovies = [
    {
      id: 1,
      title: "Dune: Part Two",
      rating: "8.9",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family. As he faces a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
      background: dune,
      genre: "Adventure, Sci-Fi",
      duration: "2h 45m",
      releaseDate: "November 3, 2023",
    },
    {
      id: 2,
      title: "Poor Things",
      rating: "8.5",
      description:
        "The incredible tale of Bella Baxter, a young woman brought back to life by an unorthodox scientist, navigating a world of wonder, love, and discovery.",
      background: poorThings,
      genre: "Drama, Sci-Fi, Fantasy",
      duration: "2h 21m",
      releaseDate: "September 8, 2023",
    },
    {
      id: 3,
      title: "Venom: The Last Dance",
      rating: "7.5",
      description:
        "Venom and Eddie Brock face their most dangerous challenge yet, as they take on a new villain in a world full of chaos and destruction. The symbiote duo must confront their past and decide their future.",
      background: venom,
      genre: "Action, Adventure, Sci-Fi",
      duration: "2h 10m",
      releaseDate: "October 23, 2024",
    },
    {
      id: 4,
      title: "Oppenheimer",
      rating: "8.9",
      description:
        "A historical drama that follows the life of J. Robert Oppenheimer, the physicist who played a key role in the creation of the atomic bomb during World War II. The film delves into his moral dilemmas and the impact of his invention on the world.",
      background: oppenheimer,
      genre: "Biography, Drama, History",
      duration: "2h 39m",
      releaseDate: "July 21, 2023",
    },
    {
      id: 5,
      title: "Rurouni Kenshin: The Final",
      rating: "8.7",
      description:
        "The final chapter in the epic journey of Kenshin Himura, as he battles to protect those he loves while confronting his past. A fight for redemption and the survival of his ideals.",
      background: rurouni,
      genre: "Action, Drama",
      duration: "2h 20m",
      releaseDate: "April 23, 2021",
    },
    {
      id: 6,
      title: "Rebel Ridge",
      rating: "7.8",
      description:
        "A high-stakes crime thriller with an explosive mix of action and drama, as a man fights to survive while being hunted down by a criminal organization.",
      background: rebel,
      genre: "Thriller, Crime, Action",
      duration: "1h 50m",
      releaseDate: "2022",
    },
    {
      id: 7,
      title: "Upstream",
      rating: "8.8",
      description:
        "Gao Zhilei's impulsive decision to become a stay-at-home husband leads to unforeseen challenges. As life takes a reverse turn, he's forced to face responsibilities as the family's breadwinner, ultimately finding himself and starting anew.",
      background: upstream,
      genre: "Drama",
      duration: "2h 1m",
      releaseDate: "August 3, 2024",
    },
  ];

  const trendingMovies = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
      title: "Badland Hunters",
      genre: "Action, Adventure, Thriller",
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

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const featuredMovie = featuredMovies[currentFeatureIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex(
        (prevIndex) => (prevIndex + 1) % featuredMovies.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[500px] md:h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={featuredMovie.background}
            alt={featuredMovie.title}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-4 pt-16 md:pt-24 flex items-center h-full">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                New Release
              </span>
              <span className="flex items-center text-yellow-400">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                {featuredMovie.rating} Rating
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {featuredMovie.title}
            </h1>

            <div className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base text-gray-300">
              <span>{featuredMovie.genre}</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1 md:mr-2" />
                {featuredMovie.duration}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 md:mr-2" />
                {featuredMovie.releaseDate}
              </span>
            </div>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-none">
              {featuredMovie.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg flex items-center justify-center space-x-2 transition">
                <Play className="w-5 h-5 md:w-6 md:h-6" />
                <span>Watch Now</span>
              </button>
              <button
                onClick={() => toggleWatchlist(featuredMovie)}
                className="w-full sm:w-auto border border-gray-700 hover:bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg flex items-center justify-center space-x-2 transition"
              >
                <Heart
                  className={`w-5 h-5 md:w-6 md:h-6 ${
                    watchlist.some((m) => m.title === featuredMovie.title)
                      ? "text-red-500 fill-current"
                      : ""
                  }`}
                />
                <span>Watchlist</span>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 md:right-0 flex justify-center md:justify-end space-x-2 md:space-x-8 z-30 px-4">
          {featuredMovies.map((movie, index) => (
            <div
              key={movie.id}
              onClick={() => setCurrentFeatureIndex(index)}
              className={`w-24 md:w-60 h-16 md:h-36 rounded-lg overflow-hidden cursor-pointer transition-transform transform ${
                currentFeatureIndex === index
                  ? "scale-105 md:scale-110 border-2 md:border-4 border-red-600 shadow-xl"
                  : "hover:scale-105"
              }`}
            >
              <img
                src={movie.background}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center mb-6 md:mb-8">
          <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-red-600 mr-2" />
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Trending Now
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl"
              onClick={() => openMovieModal(movie)}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-base md:text-lg">
                  {movie.title}
                </h3>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 md:p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto relative">
            <button
              onClick={closeMovieModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-red-600 z-10"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <div className="flex flex-col md:flex-row p-4 md:p-6">
              {/* Movie Poster */}
              <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                <img
                  src={selectedMovie.image}
                  alt={selectedMovie.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Movie Details */}
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedMovie.title}
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base text-gray-300">
                    <span>{selectedMovie.genre}</span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 md:mr-2" />
                      {selectedMovie.duration}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 md:mr-2" />
                      {selectedMovie.releaseDate}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {selectedMovie.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-6">
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
                    <button
                      className="w-full bg-red-600 text-white py-2 md:py-3 rounded-lg hover:bg-red-700 transition flex items-center justify-center space-x-2"
                      onClick={() => {
                        /* Add trailer logic */
                      }}
                    >
                      <Play className="w-5 h-5" />
                      <span>Watch Trailer</span>
                    </button>
                    <button
                      className="w-full border border-gray-700 text-white py-2 md:py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center space-x-2"
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
                          ? "Remove from Watchlist"
                          : "Add to Watchlist"}
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
  );
};

export default Home;
