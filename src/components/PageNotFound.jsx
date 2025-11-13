import { Link } from "react-router";
import error404 from "../assets/error-404.png";

const PageNotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center p-8">
      <img src={error404} alt="Page Not Found" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="btn btn-primary text-white text-[16px] px-6 py-2 mt-3">
          Go Home
        </button>
      </Link>
    </div>
  );
};
export default PageNotFound;
