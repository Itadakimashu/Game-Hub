import { useLoaderData, useOutletContext } from "react-router";
import GameCard from "../components/GameCard";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "motion/react";

const DiscoverOutlet = () => {
  document.title = "Discover | Game Hub";
  const Games = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {Games.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <GameCard game={game} />
        </motion.div>
      ))}
    </div>
  );
};
export default DiscoverOutlet;
