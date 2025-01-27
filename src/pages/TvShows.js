import React, { useState } from "react";
import { Star, Film, Play, Clock, Calendar, X, Heart } from "lucide-react";
import house from "../images/house.jpg";
import truedetective from "../images/truedetective.jpg";
import thelastofus from "../images/thelastofus.jpg";
import thebear from "../images/thebear.jpg";
import shogun from "../images/shogun.jpg";
import masters from "../images/masters.jpg";
import squidgame from "../images/squidgame.jpg";
import allofusaredead from "../images/allofusaredead.jpg";
import aliceinborderland from "../images/aliceinborderland.jpg";
import thesilentsea from "../images/thesilentsea.jpg";

const TvShows = () => {
  const shows = [
    {
      id: 1,
      title: "House of the Dragon",
      episodes: 10,
      seasons: 2,
      rating: "8.9",
      image: house,
      genre: "Fantasy, Drama",
      description:
        "The story of the Targaryen civil war that took place about 200 years before events portrayed in Game of Thrones.",
      director: "Ryan Condal, George R. R. Martin",
      cast: ["Matt Smith", "Emma D'Arcy", "Olivia Cooke"],
      duration: "60m per episode",
      releaseDate: "August 21, 2022",
      status: "Returning Series",
    },
    {
      id: 2,
      title: "True Detective: Night Country",
      episodes: 8,
      seasons: 4,
      rating: "8.7",
      image: truedetective,
      genre: "Crime, Drama, Mystery",
      description:
        "When the long winter night falls in Ennis, Alaska, the eight men who operate the Tsalal Arctic Research Station vanish without a trace.",
      director: "Issa López",
      cast: ["Jodie Foster", "Kali Reis", "Finn Bennett"],
      duration: "60m per episode",
      releaseDate: "January 15, 2023",
      status: "Completed",
    },
    {
      id: 3,
      title: "The Last of Us",
      episodes: 9,
      seasons: 1,
      rating: "8.8",
      image: thelastofus,
      genre: "Drama, Action, Adventure",
      description:
        "Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to endure brutal circumstances and ruthless killers on a trek across post-pandemic America.",
      director: "Craig Mazin, Neil Druckmann",
      cast: ["Pedro Pascal", "Bella Ramsey", "Gabriel Luna"],
      duration: "45-80m per episode",
      releaseDate: "January 15, 2023",
      status: "Returning Series",
    },
    {
      id: 4,
      title: "The Bear",
      episodes: 10,
      seasons: 2,
      rating: "8.9",
      image: thebear,
      genre: "Drama, Comedy",
      description:
        "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop after the death of his brother.",
      director: "Christopher Storer",
      cast: ["Jeremy Allen White", "Ebon Moss-Bachrach", "Ayo Edebiri"],
      duration: "30m per episode",
      releaseDate: "June 23, 2022",
      status: "Returning Series",
    },
    {
      id: 5,
      title: "Shogun",
      episodes: 10,
      seasons: 1,
      rating: "8.6",
      image: shogun,
      genre: "Drama, History",
      description:
        "In Japan in the year 1600, a mysterious European ship is found marooned in a nearby fishing village.",
      director: "Rachel Kondo, Justin Marks",
      cast: ["Hiroyuki Sanada", "Cosmo Jarvis", "Anna Sawai"],
      duration: "60m per episode",
      releaseDate: "February 27, 2024",
      status: "New Series",
    },
    {
      id: 6,
      title: "Masters of the Air",
      episodes: 9,
      seasons: 1,
      rating: "8.5",
      image: masters,
      genre: "War, Drama, History",
      description:
        "Five miles above the ground and deep behind enemy lines, eleven men inside a bomber known as the 'Flying Fortress' fight for their lives against swarms of enemy German fighters.",
      director: "John Orloff",
      cast: ["Austin Butler", "Callum Turner", "Barry Keoghan"],
      duration: "60m per episode",
      releaseDate: "January 26, 2024",
      status: "New Series",
    },
    {
      id: 7,
      title: "Squid Game",
      episodes: 9,
      seasons: 1,
      rating: "8.0",
      image: squidgame,
      genre: "Thriller, Drama",
      description:
        "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
      director: "Hwang Dong-hyuk",
      cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
      duration: "50-60m per episode",
      releaseDate: "September 17, 2021",
      status: "Returning Series",
    },
    {
      id: 8,
      title: "Alice in Borderland",
      episodes: 16,
      seasons: 2,
      rating: "7.8",
      image: aliceinborderland,
      genre: "Thriller, Sci-Fi, Mystery",
      description:
        "Arisu and his friends find themselves in a deserted Tokyo where they are forced to compete in dangerous games to survive.",
      director: "Yoshiki Watabe, Yasuko Kuramitsu",
      cast: ["Kento Yamazaki", "Tao Tsuchiya", "Nijiro Murakami"],
      duration: "45-60m per episode",
      releaseDate: "December 10, 2020",
      status: "Completed",
    },
    {
      id: 9,
      title: "All of Us Are Dead",
      episodes: 12,
      seasons: 1,
      rating: "7.6",
      image: allofusaredead,
      genre: "Horror, Thriller, Drama",
      description:
        "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.",
      director: "Lee Jae-kyoo, Chun Sung-il",
      cast: ["Yoon Chan-young", "Park Ji-hu", "Cho Yi-hyun"],
      duration: "50-60m per episode",
      releaseDate: "January 28, 2022",
      status: "Returning Series",
    },
    {
      id: 10,
      title: "The Silent Sea",
      episodes: 8,
      seasons: 1,
      rating: "7.9",
      image: thesilentsea,
      genre: "Sci-Fi, Thriller, Mystery",
      description:
        "Set in a future where Earth is dying, a team of astronauts is sent to the moon to retrieve a mysterious sample from a research station. As they uncover secrets about the station, they face life-threatening challenges.",
      director: "Choi Hang Yong",
      cast: ["Bae Doona", "Gong Yoo", "Lee Joon"],
      duration: "40-50m per episode",
      releaseDate: "December 24, 2021",
      status: "Limited Series",
    },
  ];

  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const genres = [...new Set(shows.flatMap((show) => show.genre.split(", ")))];

  const filteredShows = selectedGenre
    ? shows.filter((show) => show.genre.includes(selectedGenre))
    : shows;

  return (
    <div className="min-h-screen bg-gray-950/90">
      <div className="py-24 px-4 max-w-7xl mx-auto  min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            TV Shows/Series
          </h1>

          {/* Genre Filter */}
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShows.map((show) => (
            <div
              key={show.id}
              className="group cursor-pointer"
              onClick={() => setSelectedShow(show)}
            >
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col space-y-2 text-white">
                    <div className="flex items-center space-x-2">
                      <Film className="w-4 h-4" />
                      <span>{show.episodes} Episodes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{show.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-red-600 transition">
                {show.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{show.genre}</span>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{show.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show Details Modal */}
        {selectedShow && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto relative">
              <button
                onClick={() => setSelectedShow(null)}
                className="absolute top-4 right-4 text-white hover:text-red-600 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="flex flex-col md:flex-row p-6">
                {/* Show Poster */}
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                  <img
                    src={selectedShow.image}
                    alt={selectedShow.title}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </div>

                {/* Show Details */}
                <div className="md:w-2/3">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      {selectedShow.status}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span>{selectedShow.rating}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedShow.title}
                  </h2>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <span>{selectedShow.genre}</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {selectedShow.duration}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {selectedShow.releaseDate}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {selectedShow.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Seasons</p>
                        <p className="text-white">{selectedShow.seasons}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Episodes</p>
                        <p className="text-white">{selectedShow.episodes}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Creator</p>
                        <p className="text-white">{selectedShow.director}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Cast</p>
                        <p className="text-white">
                          {selectedShow.cast.join(", ")}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition flex items-center justify-center space-x-2">
                        <Play className="w-5 h-5" />
                        <span>Watch Now</span>
                      </button>
                      <button
                        className="w-full border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center space-x-2"
                        onClick={() => toggleWatchlist(selectedShow)}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            watchlist.some((m) => m.id === selectedShow.id)
                              ? "text-red-500 fill-current"
                              : ""
                          }`}
                        />
                        <span>
                          {watchlist.some((m) => m.id === selectedShow.id)
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
    </div>
  );
};

export default TvShows;
