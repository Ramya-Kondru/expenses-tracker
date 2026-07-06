import React, { useState, useEffect } from "react";
import axios from "axios";

const ExpenseForm = ({ fetchExpenses, editingExpense, setEditingExpense }) => {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  // Fill the form when Edit is clicked
  useEffect(() => {
    if (editingExpense) {
      setExpense({
        name: editingExpense.title,
        amount: editingExpense.amount,
        category: editingExpense.category,
        date: editingExpense.date ? editingExpense.date.split("T")[0] : "",
      });
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setExpense({
      name: "",
      amount: "",
      category: "",
      date: "",
    });

    setEditingExpense(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (editingExpense) {
        // UPDATE EXPENSE
        await axios.put(
          `http://localhost:5000/api/expenses/${editingExpense._id}`,
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
          },
        );

        alert("Expense Updated Successfully");
      } else {
        // ADD EXPENSE
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
          },
        );

        alert("Expense Added Successfully");
      }

      await fetchExpenses();
      clearForm();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          (editingExpense
            ? "Failed to update expense"
            : "Failed to add expense"),
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        name="name"
        placeholder="Expense Name"
        value={expense.name}
        onChange={handleChange}
        required
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={expense.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">🍔 Food</option>
        <option value="Transportation">🚗 Transportation</option>
        <option value="Shopping">🛍️ Shopping</option>
        <option value="Bills">💡 Bills</option>
        <option value="Entertainment">🎬 Entertainment</option>
        <option value="Health">🏥 Health</option>
        <option value="Education">📚 Education</option>
        <option value="Travel">✈️ Travel</option>
        <option value="Rent">🏠 Rent</option>
        <option value="Groceries">🛒 Groceries</option>
        <option value="Others">📦 Others</option>
      </select>

      <input
        name="date"
        type="date"
        value={expense.date}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>

      {editingExpense && (
        <button
          type="button"
          onClick={clearForm}
          style={{
            background: "#6c757d",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    margin: "20px",
    flexWrap: "wrap",
  },

  select: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #374151",
    background: "#1f2937",
    color: "white",
    fontSize: "15px",
    outline: "none",
  },
};

export default ExpenseForm;
