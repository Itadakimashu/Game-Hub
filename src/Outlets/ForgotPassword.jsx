import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ForgotPassword = () => {
  document.title = "Forgot Password | Game Hub";
  const { resetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Get email from state if passed from login page
  const emailFromLogin = location.state?.email || "";

  const handleResetPassword = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        setSuccess("Password reset email sent! Please check your Gmail.");
        // Redirect to Gmail after 2 seconds
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("No account found with this email address.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else {
          setError("Failed to send reset email. Please try again.");
        }
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
              Forgot Password
            </h2>
            <p className="text-center text-sm text-gray-600 px-6 mt-2">
              Enter your email address and we'll send you a password reset link
            </p>
            <form className="card-body" onSubmit={handleResetPassword}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  defaultValue={emailFromLogin}
                  required
                />

                {error && (
                  <div className="alert alert-error mt-4">
                    <span>{error}</span>
                  </div>
                )}

                {success && (
                  <div className="alert alert-success mt-4">
                    <span>{success}</span>
                  </div>
                )}

                <button type="submit" className="btn btn-neutral mt-4">
                  Reset Password
                </button>

                <p className="font-semibold text-center pt-5">
                  Remember your password?{" "}
                  <Link className="text-secondary" to="/login">
                    Login
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

export default ForgotPassword;
