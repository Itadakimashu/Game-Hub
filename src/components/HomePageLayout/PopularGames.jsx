import { useLoaderData } from "react-router";
import GameCard from "../GameCard";

const PopularGames = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
export default PopularGames;
