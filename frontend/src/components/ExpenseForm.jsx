import React, { useState } from "react";
import axios from 'axios';

const ExpenseForm = ({ fetchExpenses }) => {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/expenses",
      {
        title: expense.name,
        amount: Number(expense.amount),
        category: expense.category,
        date: expense.date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Expense Added Successfully");
     await fetchExpenses();
    setExpense({
      name: "",
      amount: "",
      category: "",
      date: "",
    });

    // We'll refresh the list in the next step
  } catch (error) {
    alert(error.response?.data?.message || "Failed to add expense");
  }
};

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        name="name"
        placeholder="Expense Name"
        value={expense.name}
        onChange={handleChange}
      />

      <input
        name="amount"
        placeholder="Amount"
        type="number"
        value={expense.amount}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={expense.category}
        onChange={handleChange}
      />

      <input
        name="date"
        type="date"
        value={expense.date}
        onChange={handleChange}
        required
      />

      <button>Add Expense</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    margin: "20px",
  },
};

export default ExpenseForm;
