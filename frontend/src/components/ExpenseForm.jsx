import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ name: "", amount: "", category: "", date: "" });
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
