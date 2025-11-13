import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useState } from "react";

const MainLayout = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="bg-base-200">
        {loading && <Loader />}
        <div className={loading ? "hidden" : ""}>
          <Outlet context={[setLoading]} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
