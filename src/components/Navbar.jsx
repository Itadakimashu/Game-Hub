import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const links = [
    <NavLink to="/">Home</NavLink>,
    <NavLink to="/discover">Discover</NavLink>,
    <NavLink to="/services">Services</NavLink>,
    user && <NavLink to="/my-profile">My Profile</NavLink>,
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link, index) => link && <li key={index}>{link}</li>)}
          </ul>
        </div>
        <NavLink to="/">
          <img src={logo} alt="Game Hub Logo" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, index) => link && <li key={index}>{link}</li>)}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? (
          <div className="flex items-center gap-2">
            <Link to="/my-profile">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-12 h-12 rounded-full cursor-pointer hover:ring-2 hover:ring-primary transition-all"
              />
            </Link>
            <button className="btn btn-secondary" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
