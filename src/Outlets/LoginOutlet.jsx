import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LoginOutlet = () => {
  document.title = "Login | Game Hub";
  const { loginUser, googleSignup, setLoading } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("No account found with this email address.");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else if (error.code === "auth/invalid-credential") {
          setError("Invalid email or password. Please check your credentials.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many failed login attempts. Please try again later.");
        } else {
          setError("Login failed. Please try again.");
        }
      });
  };

  const handleGoogleLogin = () => {
    setError("");
    googleSignup()
      .then((result) => {
        navigate(from, { replace: true });
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
        setError("Google login failed. Please try again.");
      });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex justify-center min-h-screen items-center">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className="font-semibold text-2xl text-center">
              Login your account
            </h2>
            <form className="card-body" onSubmit={handleLogin}>
              <fieldset className="fieldset">
                {/* email  */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* passowrd  */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <Link
                    to="/forgot-password"
                    state={{ email }}
                    className="link link-hover"
                  >
                    Forgot password?
                  </Link>
                </div>

                {error && (
                  <div className="alert alert-error mt-4">
                    <span>{error}</span>
                  </div>
                )}

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>

                <div className="divider">OR</div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
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
                  Login with Google
                </button>

                <p className="font-semibold text-center pt-5">
                  Dont’t Have An Account ?{" "}
                  <Link className="text-secondary" to="/register">
                    Register
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LoginOutlet;
