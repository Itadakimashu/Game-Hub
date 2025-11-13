import PopularGames from "../components/HomePageOutlet/PopularGames";
import NewsLetter from "../components/HomePageOutlet/NewsLetter";
import Banner from "../components/HomePageOutlet/Banner";
import { useLoaderData, useOutletContext } from "react-router";
import { use, useEffect, useState } from "react";
import MarqueeText from "../components/HomePageOutlet/MarqueeText";

const HomeOutlet = () => {
  const [setLoading] = useOutletContext();
  const [popularGames, setPopularGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      document.title = "Home - Game Hub";
      setLoading(true);
      const games = await fetch("/games.json")
        .then((res) => res.json())
        .then((data) => data.sort((a, b) => b.ratings - a.ratings).slice(0, 9));
      setPopularGames(games);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Banner popularGames={popularGames} />
      <MarqueeText />

      <div className="w-[95%] mx-auto my-8">
        <PopularGames popularGames={popularGames} />
      </div>
      <NewsLetter />
    </div>
  );
};
export default HomeOutlet;
