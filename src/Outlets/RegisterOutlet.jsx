import { Link, useNavigate, useOutletContext } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RegisterOutlet = () => {
  document.title = "Register | Game Hub";
  const { user, registerUser, updateUserProfile, googleSignup, setLoading } =
    use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase) {
      setError("Password must have at least one Uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      setError("Password must have at least one Lowercase letter.");
      return;
    }
    if (!hasMinLength) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    registerUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
            setError("Failed to update profile. Please try again.");
          });
      })
      .catch((error) => {
        console.log(error.message);
        // Display user-friendly error messages
        if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered. Please login instead.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters.");
        } else if (error.code === "auth/operation-not-allowed") {
          setError(
            "Registration is currently disabled. Please contact support."
          );
        } else {
          setError("Registration failed. Please try again.");
        }
      });
  };

  const handleGoogleSignup = () => {
    setError("");
    googleSignup()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // Check if user closed the popup
        if (
          error.code === "auth/popup-closed-by-user" ||
          error.code === "auth/cancelled-popup-request"
        ) {
          // Don't show error if user just closed the popup
          return;
        }
        setError("Google signup failed. Please try again.");
      });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {/* {nameError && <p className="text-xs text-error">{nameError}</p>} */}

              {/* Photo URl  */}
              <label className="label">Photo URl </label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URl"
                required
              />

              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              {error && (
                <div className="alert alert-error mt-4">
                  <span>{error}</span>
                </div>
              )}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              <div className="divider">OR</div>

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="btn btn-outline gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </button>

              <p className="font-semibold text-center pt-5">
                Allready Have An Account ?{" "}
                <Link className="text-secondary" to="/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RegisterOutlet;
