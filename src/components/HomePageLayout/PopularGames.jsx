import GameCard from "../GameCard";

const PopularGames = ({ popularGames }) => {
  console.log(popularGames);
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Popular Games</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {popularGames?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn bg-blue-500 text-white rounded">
          View All Games
        </button>
      </div>
    </div>
  );
};
export default PopularGames;
