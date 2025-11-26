import PopularGames from "../components/HomePageOutlet/PopularGames";
import NewsLetter from "../components/HomePageOutlet/NewsLetter";
import Banner from "../components/HomePageOutlet/Banner";
import { use, useEffect, useState } from "react";
import MarqueeText from "../components/HomePageOutlet/MarqueeText";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router";

const HomeOutlet = () => {
  document.title = "Home | Game Hub";
  const data = useLoaderData().sort((a, b) => b.ratings - a.ratings);
  const popularGames = data.slice(0, 9);

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
