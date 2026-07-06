import React from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const userData = localStorage.getItem("user");
const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    navigate("/login");

    window.location.reload();
  };

  return (
    <div className="navbar">
      <h2>
        💰 <span>Expense Tracker</span>
      </h2>

      <div className="nav-buttons">
        {isLoggedIn ? (
          <>
            <button className="nav-btn">
              {user?.name || "Profile"}
            </button>

            <button
              className="nav-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="nav-btn">
                Sign Up
              </button>
            </Link>

            <Link to="/login">
              <button className="nav-btn">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;