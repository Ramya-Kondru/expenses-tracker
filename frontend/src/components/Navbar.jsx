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
            <Link to="/login">
              <button className="nav-btn">Sign In</button>
            </Link>
            <button className="nav-btn">Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
