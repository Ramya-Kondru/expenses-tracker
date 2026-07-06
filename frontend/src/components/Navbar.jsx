import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import LogoutModal from "./LogoutModal";

const Navbar = () => {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    setShowLogout(false);

    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="navbar">
        <h2>
          💰 <span>Expense Tracker</span>
        </h2>

        <div className="nav-buttons">
          {isLoggedIn ? (
            <>
              <button
                className="nav-btn"
                onClick={() => setShowProfile(true)}
              >
                {user?.name || "Profile"}
              </button>

              <button
                className="nav-btn"
                onClick={() => setShowLogout(true)}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="nav-btn">Sign Up</button>
              </Link>

              <Link to="/login">
                <button className="nav-btn">Sign In</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {showProfile && (
        <ProfileModal
          user={user}
          onClose={() => setShowProfile(false)}
        />
      )}

      {showLogout && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </>
  );
};

export default Navbar;