import { useNavigate } from "react-router";
import GameCard from "../GameCard";

const PopularGames = ({ popularGames }) => {
  const navigate = useNavigate();
  const handleViewAllGames = () => {
    navigate("/discover");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {popularGames?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="btn btn-secondary text-white rounded"
          onClick={handleViewAllGames}
        >
          View All Games
        </button>
      </div>
    </div>
  );
};
export default PopularGames;
