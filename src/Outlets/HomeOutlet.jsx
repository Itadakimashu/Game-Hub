import PopularGames from "../components/HomePageLayout/PopularGames";
import NewsLetter from "../components/HomePageLayout/NewsLetter";
import Banner from "../components/HomePageLayout/Banner";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";

const HomeOutlet = () => {
  const data = useLoaderData();
  data.sort((a, b) => b.ratings - a.ratings);
  const popularGames = data.slice(0, 9);

  return (
    <div>
      <Banner popularGames={popularGames} />
      <div className="w-[95%] mx-auto my-8">
        <PopularGames popularGames={popularGames} />
      </div>
      <NewsLetter />
    </div>
  );
};
export default HomeOutlet;
