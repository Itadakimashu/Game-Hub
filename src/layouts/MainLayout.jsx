import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MainLayout = () => {
  const { loading, setLoading } = use(AuthContext);
  return (
    <div>
      {loading && <Loader setLoading={setLoading} />}
      <div className={loading ? "hidden" : ""}>
        <header>
          <Navbar />
        </header>
        <main className="bg-base-200">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
