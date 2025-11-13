import { useLoaderData, useOutletContext } from "react-router";
import GameCard from "../components/GameCard";
import { useEffect, useState } from "react";

const DiscoverOutlet = () => {
  const [setLoading] = useOutletContext();
  const [Games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      document.title = "Discover - Game Hub";
      setLoading(true);
      const games = await fetch("/games.json").then((res) => res.json());
      console.log(games);
      setGames(games);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {Games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
export default DiscoverOutlet;
