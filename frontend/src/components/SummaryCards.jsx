import React from "react";
import "../styles/SummaryCards.css";

const SummaryCards = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const budget = 5000;
  const remaining = budget - total;

  return (
    <div className="cards-container">
      <div className="card">
        <h3>Total Expenses</h3>
        <p>₹{total}</p>
      </div>

      <div className="card">
        <h3>Budget</h3>
        <p>₹{budget}</p>
      </div>

      <div className="card">
        <h3>Remaining</h3>
        <p>₹{remaining}</p>
      </div>
    </div>
  );
};

export default SummaryCards;
