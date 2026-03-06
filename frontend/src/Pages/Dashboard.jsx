import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-content">
        <SummaryCards expenses={expenses} />

        <ExpenseForm addExpense={addExpense} />

        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
};

export default Dashboard;
