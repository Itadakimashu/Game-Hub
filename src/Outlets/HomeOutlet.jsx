import PopularGames from "../components/HomePageLayout/PopularGames";
import NewsLetter from "../components/HomePageLayout/NewsLetter";

const HomeOutlet = () => {
  return (
    <div>
      <div className="w-[95%] mx-auto my-8">
        <PopularGames />
      </div>
      <NewsLetter />
    </div>
  );
};
export default HomeOutlet;
