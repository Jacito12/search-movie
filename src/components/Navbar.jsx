import React, { useState, useEffect } from "react";

const navUrl =
  "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQcrxeqIIcFKB302jZz6RRwAutv_Ics5OvfmaIlOiv4l4NSnrJFVQjakXjRLIZlTuulAPhfzX2NMZD0EJIiUyl8VnFiYKtMlRnhLiqt6tnwSWJzxe4REcuoQgRME4sVfAb7mVBkGpgZkTYEPFERl5WPVBxxA.jpg?r=f2e";

// Component for the background image and text
const HeroSection = () => (
  <div className="relative min-h-[800px]">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${navUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
    </div>
    <div className="relative flex flex-col justify-center items-center min-h-[800px] text-white text-center ">
      <h1 className="text-6xl font-bold mb-4">
        Welcome to the Movie Search Engine
      </h1>
      <p className="text-2xl mb-6">
        Browse the best movies. Find the best movie for you!
      </p>
      <a href="#" className="hover:translate-y-2 transition duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </a>
    </div>
  </div>
);

// Component for the mobile menu
const MobileMenu = ({ setIsMenuOpen }) => (
  <div className="md:hidden z-10 absolute right-0 bg-gray-900 text-center flex flex-col">
    <a
      href="#"
      className="py-2 text-lg hover:bg-gray-800 px-4"
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </a>
    <a
      href="#"
      className="py-2 text-lg hover:bg-gray-800 px-4"
      onClick={() => setIsMenuOpen(false)}
    >
      Favorites
    </a>
    <a
      href="#"
      className="py-2 text-lg hover:bg-gray-800 px-4"
      onClick={() => setIsMenuOpen(false)}
    >
      Contact
    </a>
  </div>
);

// Component for the desktop menu
const DesktopMenu = () => (
  <div className="hidden md:flex items-center space-x-7 text-lg">
    <a href="#" className="hover:underline underline-offset-8">
      Home
    </a>
    <a href="#" className="hover:underline underline-offset-8">
      Favorites
    </a>
    <a href="#" className="hover:underline underline-offset-8">
      Contact
    </a>
  </div>
);

const useScrollEffect = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

// Main Navbar component
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollEffect();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 text-white p-4 transition-colors duration-300 ${
          isScrolled ? "bg-zinc-950" : "bg-black/45"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <a href="#" className="text-3xl font-bold">
                <p>
                  <span className="">Search</span>
                  <span className="text-cyan-700"> Movies</span>
                </p>
              </a>
            </div>
            <DesktopMenu />
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
      </nav>
      <HeroSection />
    </>
  );
};
