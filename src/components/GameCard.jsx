import { useNavigate } from "react-router";

const GameCard = ({ game }) => {
  const {
    id,
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/discover/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-shadow">
      <figure className="h-48 overflow-hidden">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex flex-col gap-1">
          <h2 className="card-title text-lg font-bold flex-1">{title} </h2>
          <p className="text-sm text-gray-500">{category}</p>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {description.length < 100
            ? description
            : `${description.slice(0, 97)}...`}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm font-semibold">{ratings}</span>
          </div>
          <span className="text-xs text-gray-500">by {developer}</span>
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm" onClick={handleViewDetail}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
