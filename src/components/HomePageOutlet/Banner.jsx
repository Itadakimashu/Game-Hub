import { useState, useEffect } from "react";

const Banner = ({ popularGames }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = popularGames.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12">
      {slides.map((game, index) => (
        <div
          key={game.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={game.coverPhoto}
            className="w-full h-full object-cover"
            alt={game.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30"></div>
        </div>
      ))}

      {/* Welcome Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center tracking-tight drop-shadow-2xl">
          Welcome to Game Hub
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-8 text-center drop-shadow-xl">
          Discover Amazing Indie Games
        </p>
        <a
          href="/discover"
          className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black shadow-xl"
        >
          Browse Games
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
