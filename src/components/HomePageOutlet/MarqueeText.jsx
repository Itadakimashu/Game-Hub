import Marquee from "react-fast-marquee";
const MarqueeText = () => {
  return (
    <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
      <p className="font-bold mx-8">
        🎮 New games added weekly - Stay updated with the latest releases!
      </p>
      <p className="font-bold mx-8">
        ⭐ Rated by millions of gamers - Find your next favorite game!
      </p>
      <p className="font-bold mx-8">
        🔥 Hot deals on popular titles - Download now and start playing!
      </p>
      <p className="font-bold mx-8">
        🏆 Join our gaming community - Connect with players worldwide!
      </p>
      <p className="font-bold mx-8">
        ⚡ Fast and secure downloads - Get gaming in minutes!
      </p>
      <p className="font-bold mx-8">
        🎯 Curated collections for every genre - Action, Strategy, RPG & more!
      </p>
    </Marquee>
  );
};

export default MarqueeText;
