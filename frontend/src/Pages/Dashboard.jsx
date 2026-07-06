import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import PieChartComponent from "../components/PieChartComponent";
import MonthlyLineChart from "../components/MonthlyLineChart";

import "../styles/Dashboard.css";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  // Fetch all expenses
  const fetchExpenses = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:5000/api/expenses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setExpenses(response.data.expenses);
    } catch (error) {
      console.log(error);
    }
  };

  // Edit an expense
  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  // Delete an expense
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:5000/api/expenses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense._id !== id),
      );
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-content">
        {/* Summary Cards */}
        <SummaryCards expenses={expenses} />

        {/* Charts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 2fr",
            gap: "25px",
            margin: "30px 0",
            alignItems: "stretch",
          }}
        >
          <PieChartComponent expenses={expenses} />

          <MonthlyLineChart expenses={expenses} />
        </div>

        {/* Expense Form */}
        <ExpenseForm
          fetchExpenses={fetchExpenses}
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
        />

        {/* Expense List */}
        <ExpenseList
          expenses={expenses}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Dashboard;
