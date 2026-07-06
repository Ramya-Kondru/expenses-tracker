import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

import heroImage from "../assets/hero_section_image.png";

const Home = () => {
  const navigate = useNavigate();

  // Handle Get Started button
  const handleGetStarted = () => {
    const token = localStorage.getItem("token");

    if (token) {
      // User is already logged in
      navigate("/dashboard");
    } else {
      // User is not logged in
      navigate("/register");
    }
  };

  return (
    <>
      <Navbar />

      <section className="hero">
        <img
          src={heroImage}
          alt="Expense Tracker Dashboard"
          className="hero-image"
        />

        <div className="hero-overlay">
          <h1>
            Track Expenses.
            <br />
            <span>Manage Money.</span>
            <br />
            Build a Better You.
          </h1>

          <p>
            Smart expense tracking to help you save more, spend wisely and
            achieve your financial goals.
          </p>

          <button className="hero-btn" onClick={handleGetStarted}>
            Get Started →
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;