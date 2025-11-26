import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UpdateProfile = () => {
  document.title = "Update Profile | Game Hub";
  const { user, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const name = e.target.name.value;
    const photoURL = e.target.photo.value;

    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        setSuccess("Profile updated successfully!");
        setTimeout(() => {
          navigate("/my-profile");
        }, 1500);
      })
      .catch((error) => {
        console.log(error.message);
        setError("Failed to update profile. Please try again.");
      });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-base-200 py-8">
        <div className="max-w-xl mx-auto px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6 justify-center">
                Update Profile
              </h2>

              <form onSubmit={handleUpdateProfile}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="input input-bordered"
                    placeholder="Your Name"
                    defaultValue={user?.displayName || ""}
                    required
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="url"
                    className="input input-bordered"
                    placeholder="Photo URL"
                    defaultValue={user?.photoURL || ""}
                    required
                  />
                </div>

                {error && (
                  <div className="alert alert-error mb-4">
                    <span>{error}</span>
                  </div>
                )}

                {success && (
                  <div className="alert alert-success mb-4">
                    <span>{success}</span>
                  </div>
                )}

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Update Information
                  </button>
                </div>

                <div className="form-control mt-4">
                  <button
                    type="button"
                    onClick={() => navigate("/my-profile")}
                    className="btn btn-ghost"
                  >
                    Cancel
                  </button>
                </div>
              </form>
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

export default UpdateProfile;
