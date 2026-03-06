import React from "react";
import "../styles/Navbar.css";

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
            <button className="nav-btn">Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;