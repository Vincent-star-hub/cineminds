import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Play,
  Heart,
  Twitter,
  Instagram,
  Youtube,
  User,
  Mail,
  Lock,
} from "lucide-react";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isSignUpOpen || isSignInOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  }, [isSignUpOpen, isSignInOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/movies", label: "Movies" },
    { path: "/tv-shows", label: "TV Shows/Series" },
    { path: "/watchlist", label: "Watchlist" },
    { path: "/search", label: "Search", icon: Search },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const SignUpModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        isSignUpOpen ? "" : "hidden"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md mx-4 relative">
        <button
          onClick={() => setIsSignUpOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Create an account
          </h2>
          <p className="text-gray-400">
            Join CineMinds to track your favorite movies and TV shows.
          </p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 border border-gray-700 focus:border-red-600 focus:outline-none"
            />
          </div>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 border border-gray-700 focus:border-red-600 focus:outline-none"
            />
          </div>
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 border border-gray-700 focus:border-red-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <button
            className="text-red-600 hover:text-red-500"
            onClick={() => {
              setIsSignUpOpen(false);
              setIsSignInOpen(true);
            }}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );

  const SignInModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        isSignInOpen ? "" : "hidden"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md mx-4 relative">
        <button
          onClick={() => setIsSignInOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
          <p className="text-gray-400">
            Log in to access your personalized movie list.
          </p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 border border-gray-700 focus:border-red-600 focus:outline-none"
            />
          </div>
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 border border-gray-700 focus:border-red-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{" "}
          <button
            className="text-red-600 hover:text-red-500"
            onClick={() => {
              setIsSignInOpen(false);
              setIsSignUpOpen(true);
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );

  // Rest of the component remains the same
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <nav
        className={`fixed w-full z-40 bg-gray-900 transition-transform duration-300 ${
          isNavbarVisible ? "transform translate-y-0" : "-translate-y-16"
        }`}
      >
        {/* Navigation content remains the same */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Play className="text-red-600" />
              <span className="text-2xl font-bold text-white">CineMinds</span>
            </Link>

            <div className="hidden md:flex items-center justify-center space-x-8 flex-grow">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    text-white transition-colors flex items-center space-x-1
                    ${
                      isActive(item.path)
                        ? "text-red-600"
                        : "hover:text-red-600"
                    }
                  `}
                >
                  {item.icon && <item.icon size={18} />}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex">
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Up
              </button>
            </div>

            <button
              className="md:hidden text-white hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-3 py-2 text-white hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center space-x-2">
                      {item.icon && <item.icon size={18} />}
                      <span>{item.label}</span>
                    </span>
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSignUpOpen(true);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg mt-2"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <SignUpModal />
      <SignInModal />

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer content remains the same */}
      <footer className="bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Play className="text-red-600" />
                <span className="text-2xl font-bold">Cineminds</span>
              </div>
              <p className="text-gray-400">
                Your ultimate destination for movies and TV shows.
              </p>
              <div className="flex space-x-4">
                <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map(
                  (genre) => (
                    <li key={genre}>
                      <Link
                        to="/movies"
                        className="text-gray-400 hover:text-white"
                      >
                        {genre}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} MovieHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
