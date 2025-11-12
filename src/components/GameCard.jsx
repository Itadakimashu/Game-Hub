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
        <h2 className="card-title text-lg font-bold flex-1">
          {title}{" "}
          <span className="badge badge-secondary whitespace-nowrap text-sm ml-2 font-semibold">
            {category}
          </span>
        </h2>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm font-semibold">{ratings}</span>
          </div>
          <span className="text-xs text-gray-500">by {developer}</span>
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
