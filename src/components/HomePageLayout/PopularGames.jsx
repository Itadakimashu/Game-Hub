import { useLoaderData } from "react-router";
import GameCard from "../GameCard";

const PopularGames = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Popular Games</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};
export default PopularGames;
