import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";

const DiscoverOutlet = () => {
  const Games = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {Games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
export default DiscoverOutlet;
