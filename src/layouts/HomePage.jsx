import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Homepage;
