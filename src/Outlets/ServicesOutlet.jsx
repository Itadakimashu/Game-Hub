import { useNavigate } from "react-router";

const ServicesOutlet = () => {
  document.title = "Services - Game Hub";
  const navigate = useNavigate();
  const toDiscover = () => {
    navigate("/discover");
    window.scrollTo(0, 0);
  };

  const services = [
    {
      id: 1,
      icon: "🎮",
      title: "Game Discovery",
      description:
        "Explore our vast collection of games across all genres. From action-packed adventures to strategic puzzles, find your next favorite game easily.",
    },
    {
      id: 2,
      icon: "⬇️",
      title: "Easy Downloads",
      description:
        "Download games quickly and securely. We provide direct download links with fast servers to get you gaming in no time.",
    },
    {
      id: 3,
      icon: "⭐",
      title: "Ratings & Reviews",
      description:
        "Make informed decisions with our community ratings and reviews. See what other gamers think before you download.",
    },
    {
      id: 4,
      icon: "🔄",
      title: "Regular Updates",
      description:
        "Stay up-to-date with the latest game releases, patches, and updates. Never miss out on new content and improvements.",
    },
    {
      id: 5,
      icon: "🏆",
      title: "Featured Games",
      description:
        "Discover handpicked games selected by our team. We showcase the best titles trending in the gaming community.",
    },
    {
      id: 6,
      icon: "💬",
      title: "Community Support",
      description:
        "Join our gaming community for tips, discussions, and support. Connect with fellow gamers and share experiences.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          Game Hub offers a comprehensive suite of services to enhance your
          gaming experience. Discover, download, and enjoy the best games all in
          one place.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body items-center text-center">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h2 className="card-title text-2xl mb-3">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Gaming?</h3>
        <p className="text-gray-600 mb-6">
          Join thousands of gamers and discover your next adventure today!
        </p>
        <button className="btn btn-primary btn-lg" onClick={toDiscover}>
          Browse Games
        </button>
      </div>
    </div>
  );
};
export default ServicesOutlet;
