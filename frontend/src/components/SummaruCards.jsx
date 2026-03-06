import React from "react";

const SummaryCards = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const budget = 5000;
  const remaining = budget - total;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Total Expenses</h3>
        <p>₹{total}</p>
      </div>

      <div style={styles.card}>
        <h3>Budget</h3>
        <p>₹{budget}</p>
      </div>

      <div style={styles.card}>
        <h3>Remaining</h3>
        <p>₹{remaining}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    margin: "20px",
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "200px",
  },
};

export default SummaryCards;
