import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <Navbar />

      <SummaryCards expenses={expenses} />

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
