import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

import heroImage from "../assets/hero_section_image.png"; // <-- rename your image

const Home = () => {
  const navigate = useNavigate();

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

          <button className="hero-btn" onClick={() => navigate("/Register")}>
            Get Started →
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
