import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        💰 <span>Expense Tracker</span>
      </h2>

      <div className="nav-buttons">
        <button className="nav-btn">Profile</button>
        <button className="nav-btn">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
