const Banner = ({ popularGames }) => {
  const scrollLeft = () => {
    document
      .getElementById("banner-carousel")
      .scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .getElementById("banner-carousel")
      .scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        id="banner-carousel"
        className="carousel rounded-box w-full h-64 md:h-96 overflow-x-scroll"
      >
        <div className="carousel-item">
          {popularGames.map((game) => (
            <img key={game.id} src={game.coverPhoto} className="w-full" />
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle bg-black bg-opacity-50 hover:bg-opacity-75 text-white border-none"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle bg-black bg-opacity-50 hover:bg-opacity-75 text-white border-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
