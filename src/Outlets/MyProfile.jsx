import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyProfile = () => {
  document.title = "My Profile | Game Hub";
  const { user } = use(AuthContext);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-base-200 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl mb-6">My Profile</h2>

              <div className="avatar mb-4">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt={user?.displayName}
                  />
                </div>
              </div>

              <div className="w-full space-y-4">
                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-sm text-gray-500 mb-1">
                    Name
                  </h3>
                  <p className="text-lg font-medium">
                    {user?.displayName || "Not set"}
                  </p>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-sm text-gray-500 mb-1">
                    Email
                  </h3>
                  <p className="text-lg font-medium">{user?.email}</p>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-sm text-gray-500 mb-1">
                    Account Created
                  </h3>
                  <p className="text-lg font-medium">
                    {user?.metadata?.creationTime
                      ? new Date(
                          user.metadata.creationTime
                        ).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>

              <div className="card-actions mt-6">
                <Link to="/update-profile" className="btn btn-primary">
                  Update Profile
                </Link>
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

export default MyProfile;
