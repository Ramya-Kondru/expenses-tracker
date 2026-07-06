import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div className="navbar">
      <h2>
        💰 <span>Expense Tracker</span>
      </h2>

      <div className="nav-buttons">
        {isLoggedIn ? (
          <>
            <button className="nav-btn">Profile</button>
            <button className="nav-btn">Logout</button>
          </>
        ) : (
          <>
            <button className="nav-btn">Sign In</button>
            <Link to="/register">
              <button className="nav-btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;