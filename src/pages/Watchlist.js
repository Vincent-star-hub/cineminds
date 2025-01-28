import React, { useState, useEffect } from "react";
import { Heart, Trash2, Clock, Play, X, Calendar, Star } from "lucide-react";
import dune from "../images/dune.jpg";
import poorthings from "../images/poorthings.jpg";
import venom from "../images/venom.jpg";
import spacesweepers from "../images/spacesweepers.jpg";
import timetohunt from "../images/timetohunt.jpg";
import shogun from "../images/shogun.jpg";
import godzilla from "../images/godzilla.jpg";
import rewind from "../images/rewind.jpg";
import squidgame from "../images/squidgame.jpg";

const Watchlist = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const watchlist = [
    {
      id: 1,
      title: "Dune: Part Two",
      type: "Movie",
      addedDate: "2024-11-03",
      image: dune,
      rating: "8.9",
      duration: "2h 45m",
      genre: "Adventure, Sci-Fi",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family. As he faces a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
      cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
      director: "Denis Villeneuve",
    },
    {
      id: 2,
      title: "Poor Things",
      type: "Movie",
      addedDate: "2024-09-08",
      image: poorthings,
      rating: "8.5",
      duration: "2h 21m",
      genre: "Drama, Sci-Fi, Fantasy",
      description:
        "The incredible tale of Bella Baxter, a young woman brought back to life by an unorthodox scientist, navigating a world of wonder, love, and discovery.",
      cast: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe"],
      director: "Yorgos Lanthimos",
    },
    {
      id: 3,
      title: "Venom: The Last Dance",
      type: "Featured",
      addedDate: "2024-09-08",
      genre: "Action, Sci-Fi, Thriller",
      rating: "7.8",
      image: venom,
      description:
        "Venom and Eddie Brock face their most dangerous challenge yet, as they take on a new villain in a world full of chaos and destruction. The symbiote duo must confront their past and decide their future.",
      cast: ["Tom Hardy", "Juno Temple", "Chiwetel Ejiofor"],
      duration: "2h 10m",
      director: "Kelly Marcel",
      releaseDate: "October 23, 2024",
    },
    {
      id: 4,
      title: "Space Sweepers",
      type: "Movie",
      addedDate: "2024-05-07",
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
      id: 5,
      title: "Time to Hunt",
      type: "Movie",
      addedDate: "2024-03-02",
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
      id: 6,
      title: "Shogun",
      type: "TV Series",
      addedDate: "2024-08-23",
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
      id: 7,
      title: "Godzilla x Kong: The New Empire",
      type: "Movie",
      addedDate: "2024-05-19",
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
      id: 8,
      title: "Rewind",
      type: "Movie",
      addedDate: "2024-12-21",
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
      id: 9,
      title: "Squid Game",
      type: "TV Series",
      addedDate: "2022-01-02",
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
  ];

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleRemoveFromWatchlist = (id, event) => {
    event.stopPropagation();
    // Add your remove logic here
    console.log(`Removing item with id: ${id}`);
  };

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      // Cleanup to ensure scrolling is re-enabled if the component unmounts
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <div className="min-h-screen bg-gray-950/90">
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 mb-8">
          <Heart className="w-6 h-6 text-red-600" />
          <h1 className="text-3xl font-bold text-white">My Watchlist</h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {watchlist.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-700/50 transition cursor-pointer group"
            >
              <div className="relative w-20 h-30 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-white font-semibold group-hover:text-red-500 transition">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{item.type}</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Added {item.addedDate}
                  </span>
                </div>
              </div>
              <button
                onClick={(e) => handleRemoveFromWatchlist(item.id, e)}
                className="text-gray-400 hover:text-red-600 transition p-2 hover:bg-gray-600/20 rounded-full"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Movie Details Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-red-600 z-10 p-2 hover:bg-gray-800 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row p-6">
              {/* Movie Poster */}
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500/90 text-white px-2 py-1 rounded-md text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" fill="white" />
                    {selectedItem.rating}
                  </div>
                </div>
              </div>

              {/* Movie Details */}
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedItem.title}
                </h2>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {selectedItem.duration}
                    </span>
                    <span>{selectedItem.genre}</span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Added: {selectedItem.addedDate}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  {selectedItem.cast && (
                    <div>
                      <h3 className="text-white font-semibold mb-2">Cast</h3>
                      <p className="text-gray-300">
                        {selectedItem.cast.join(", ")}
                      </p>
                    </div>
                  )}

                  {selectedItem.director && (
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        Director
                      </h3>
                      <p className="text-gray-300">{selectedItem.director}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition">
                      <Play className="w-5 h-5" />
                      <span>Watch Now</span>
                    </button>
                    <button
                      onClick={(e) =>
                        handleRemoveFromWatchlist(selectedItem.id, e)
                      }
                      className="flex-1 border border-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                      <span>Remove from Watchlist</span>
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

export default Watchlist;
