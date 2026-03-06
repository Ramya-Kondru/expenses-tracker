import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar isLoggedIn={false} />

      <div>
        <h1>Welcome to Expense Tracker</h1>
      </div>
    </>
  );
};

export default Home;