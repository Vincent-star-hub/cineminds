import React, { useState, useEffect } from "react";
import {
  Search as SearchIcon,
  Play,
  Star,
  X,
  Clock,
  Calendar,
  Heart,
} from "lucide-react";
import civilwar from "../images/civilwar.jpg";
import badboys from "../images/badboys.jpg";
import nineteen from "../images/1917.jpg";
import godzilla from "../images/godzilla.jpg";
import anyone from "../images/anyone.jpg";
import migration from "../images/migration.jpg";
import thezone from "../images/thezone.jpg";
import napoleon from "../images/napoleon.jpg";
import thesilentsea from "../images/thesilentsea.jpg";
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
import house from "../images/house.jpg";
import truedetective from "../images/truedetective.jpg";
import thelastofus from "../images/thelastofus.jpg";
import thebear from "../images/thebear.jpg";
import shogun from "../images/shogun.jpg";
import masters from "../images/masters.jpg";
import squidgame from "../images/squidgame.jpg";
import allofusaredead from "../images/allofusaredead.jpg";
import aliceinborderland from "../images/aliceinborderland.jpg";
import oppenheimer from "../images/oppenheimer.jpg";
import venom from "../images/venom.jpg";
import dune from "../images/dune.jpg";
import poorthings from "../images/poorthings.jpg";
import rebel from "../images/rebel.jpg";
import rurouni from "../images/rurouni.jpg";
import upstream from "../images/upstream.jpg";
import bewithyou from "../images/bewithyou.jpg";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  // Combined content from all pages
  const allContent = [
    // Movies page content
    {
      id: 1,
      title: "Bad Boys: Ride or Die",
      type: "Movie",
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
      type: "Movie",
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
      type: "Movie",
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
      type: "Movie",
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
      type: "Movie",
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
      type: "Movie",
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
      type: "Movie",
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
      type: "Movie",
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
      title: "Space Sweepers",
      type: "Movie",
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
      id: 10,
      title: "Carter",
      type: "Movie",
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
      id: 11,
      title: "Time to Hunt",
      type: "Movie",
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
    // Homepage trending content
    {
      id: 12,
      title: "Poor Things",
      type: "Featured",
      genre: "Drama, Fantasy",
      rating: "8.5",
      image: poorthings,
      description:
        "The incredible tale of Bella Baxter, a young woman brought back to life by an unorthodox scientist, navigating a world of wonder, love, and discovery.",
      cast: ["Emma Stone", "Willem Dafoe", "Mark Ruffalo"],
      duration: "2h 21m",
      director: "Yorgos Lanthimos",
      releaseDate: "December 8, 2023",
    },
    {
      id: 13,
      title: "Dune: Part Two",
      type: "Featured",
      genre: "Sci-Fi, Adventure",
      rating: "8.9",
      image: dune,
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family. As he faces a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
      cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
      duration: "2h 46m",
      director: "Denis Villeneuve",
      releaseDate: "March 1, 2024",
    },
    {
      id: 14,
      title: "Oppenheimer",
      type: "Featured",
      genre: "Biography, Drama, History",
      rating: "8.9",
      image: oppenheimer,
      description:
        "A historical drama that follows the life of J. Robert Oppenheimer, the physicist who played a key role in the creation of the atomic bomb during World War II. The film delves into his moral dilemmas and the impact of his invention on the world.",
      cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
      duration: "2h 39m",
      director: "Christopher Nolan",
      releaseDate: "July 21, 2023",
    },
    {
      id: 15,
      title: "Venom: The Last Dance",
      type: "Featured",
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
      id: 16,
      title: "Rurouni Kenshin: The Final",
      type: "Featured",
      genre: "Action, Drama",
      rating: "8.1",
      image: rurouni,
      description:
        "The final chapter in the epic journey of Kenshin Himura, as he battles to protect those he loves while confronting his past. A fight for redemption and the survival of his ideals.",
      cast: ["Takeru Satoh", "Emi Takei", "Munetaka Aoki"],
      duration: "2h 20m",
      director: "Keishi Ōtomo",
      releaseDate: "April 23, 2021",
    },
    {
      id: 17,
      title: "Rebel Ridge",
      type: "Featured",
      genre: "Thriller, Crime, Action",
      rating: "7.2",
      image: rebel,
      description:
        "A high-stakes crime thriller with an explosive mix of action and drama, as a man fights to survive while being hunted down by a criminal organization.",
      cast: ["Aaron Pierre", "Don Johnson", "Anna Sophia Robb"],
      duration: "2h 12m",
      director: "Jeremy Saulnier",
      releaseDate: "September 6, 2024",
    },
    {
      id: 18,
      title: "Upstream",
      type: "Featured",
      genre: "Drama",
      rating: "8.7",
      image: upstream,
      description:
        "Gao Zhilei's impulsive decision to become a stay-at-home husband leads to unforeseen challenges. As life takes a reverse turn, he's forced to face responsibilities as the family's breadwinner, ultimately finding himself and starting anew.",
      cast: ["Xu Zheng", "Xin Zhilei", "Wang Xiao"],
      duration: "2h 1m",
      director: "Xu Zheng",
      releaseDate: "August 3, 2024",
    },

    // TV Series content
    {
      id: 19,
      title: "House of the Dragon",
      type: "TV Series",
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
      id: 20,
      title: "True Detective: Night Country",
      type: "TV Series",
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
      id: 21,
      title: "The Last of Us",
      type: "TV Series",
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
      id: 22,
      title: "The Bear",
      type: "TV Series",
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
      id: 23,
      title: "Shogun",
      type: "TV Series",
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
      id: 24,
      title: "Masters of the Air",
      type: "TV Series",
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
      id: 25,
      title: "Squid Game",
      type: "TV Series",
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
      id: 26,
      title: "Alice in Borderland",
      type: "TV Series",
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
      id: 27,
      title: "All of Us Are Dead",
      type: "TV Series",
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
      id: 28,
      title: "The Silent Sea",
      type: "TV Series",
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
    //Trendin Movies
    {
      id: 29,
      title: "Back in Action",
      type: "Movie",
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
      id: 30,
      title: "The Invitation",
      type: "Movie",
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
      id: 31,
      title: "Eastern Promises",
      type: "Movie",
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
      id: 32,
      title: "Kingdom IV: Return of the Great General",
      type: "Movie",
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
      id: 33,
      title: "Sonic the Hedgehog 3",
      type: "Movie",
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
      id: 34,
      title: "Ad Vitam",
      type: "Movie",
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
      id: 35,
      title: "Knight and Day",
      type: "Movie",
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
      id: 36,
      title: "The Secret Life of Pets 2",
      type: "Movie",
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
      id: 37,
      title: "The Creator",
      type: "Movie",
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
      id: 38,
      title: "Rewind",
      type: "Movie",
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
      id: 39,
      title: "Officer Black Belt",
      type: "Movie",
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
      id: 40,
      title: "Badland Hunters",
      type: "Movie",
      genre: "Action, Adventure ,Thriller",
      rating: "8.2",
      duration: "1h 47m",
      releaseDate: "01/25/2024 (KR)",
      image: badlandhunters,
      description:
        "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
      director: "Heo Myeong-haeng",
      cast: ["Don lee", "Lee Hee-jun", "Lee Jun-young"],
    },
    {
      id: 41,
      title: "Be With You",
      type: "Movie",
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
  ];

  const showResults = searchQuery.length > 0;
  const filteredResults = allContent.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeBadgeColor = (type) => {
    switch (type) {
      case "Movie":
        return "bg-blue-600";
      case "TV Series":
        return "bg-purple-600";
      case "Trending":
        return "bg-green-600";
      case "Featured":
        return "bg-yellow-600";
      default:
        return "bg-gray-600";
    }
  };

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

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      // Cleanup to ensure scrolling is re-enabled if the component unmounts
      document.body.style.overflow = "";
    };
  }, [selectedMovie]);

  return (
    <div className="min-h-screen bg-gray-950/90">
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <div className="relative max-w-2xl mx-auto mb-12">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies, TV shows or Series, and trending content..."
            className="w-full bg-gray-800 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {showResults ? (
          filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => openMovieModal(item)}
                >
                  <div className="relative rounded-lg overflow-hidden mb-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[450px] object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <span
                        className={`${getTypeBadgeColor(
                          item.type
                        )} px-2 py-1 rounded-full text-xs text-white`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-red-600 transition">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{item.genre}</span>
                    <span className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      {item.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <SearchIcon className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-gray-400 text-lg">
                No results found for "{searchQuery}"
              </p>
              <p className="text-gray-500 mt-2">
                Try searching with different keywords
              </p>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-400 text-lg">
              Start typing to search for movies
            </p>
            <p className="text-gray-500 mt-2">Enter a movie title to begin</p>
          </div>
        )}

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
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                  <img
                    src={selectedMovie.image}
                    alt={selectedMovie.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

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

                    <p className="text-gray-300 leading-relaxed">
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
                      <button
                        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition flex items-center justify-center space-x-2"
                        onClick={() => {
                          /* Add trailer logic */
                        }}
                      >
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

export default Search;
