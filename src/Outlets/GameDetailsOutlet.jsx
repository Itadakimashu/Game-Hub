import { useLoaderData, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GameDetailsOutlet = () => {
  const games = useLoaderData();
  const { id } = useParams();
  const game = games.find((game) => game.id == id);
  document.title = `${game.title} | Game Hub`;
  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="min-h-screen py-8">
          <div className="max-w-6xl mx-auto px-4">
            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="btn btn-ghost mb-6"
            >
              ← Back to Games
            </button>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side - Cover Image */}
              <div className="lg:col-span-1">
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={coverPhoto}
                      alt={title}
                      className="w-full h-auto object-cover rounded-t-2xl"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="badge badge-secondary badge-lg w-full justify-center py-4">
                      {category}
                    </div>
                    <a
                      href={downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full mt-4"
                    >
                      ⬇️ Download Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Game Information */}
              <div className="lg:col-span-2">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    {/* Title */}
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>

                    {/* Rating and Developer */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-2xl">★</span>
                        <span className="text-2xl font-bold">{ratings}</span>
                        <span className="text-gray-500">/ 5.0</span>
                      </div>
                      <div className="divider divider-horizontal"></div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Developer:</span>
                        <span className="text-primary">{developer}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold mb-3">
                        About This Game
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {description}
                      </p>
                    </div>

                    {/* Game Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-base-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-sm text-gray-500 mb-1">
                          Category
                        </h3>
                        <p className="text-lg font-medium">{category}</p>
                      </div>
                      <div className="bg-base-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-sm text-gray-500 mb-1">
                          Rating
                        </h3>
                        <p className="text-lg font-medium">{ratings} ★</p>
                      </div>
                      <div className="bg-base-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-sm text-gray-500 mb-1">
                          Developer
                        </h3>
                        <p className="text-lg font-medium">{developer}</p>
                      </div>
                      <div className="bg-base-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-sm text-gray-500 mb-1">
                          Game ID
                        </h3>
                        <p className="text-lg font-medium">#{id}</p>
                      </div>
                    </div>

                    {/* Download Button (Mobile) */}
                    <div className="lg:hidden mt-6">
                      <a
                        href={downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-full btn-lg"
                      >
                        ⬇️ Download Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default GameDetailsOutlet;
