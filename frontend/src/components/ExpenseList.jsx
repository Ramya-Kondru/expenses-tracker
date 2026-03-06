import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <table border="1" cellPadding="10" style={{ margin: "20px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((e, index) => (
          <tr key={index}>
            <td>{e.name}</td>
            <td>₹{e.amount}</td>
            <td>{e.category}</td>
            <td>{e.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
