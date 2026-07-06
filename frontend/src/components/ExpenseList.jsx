import React from "react";

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        margin: "20px",
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <tr key={expense._id}>
              <td>{expense.title}</td>
              <td>₹{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{new Date(expense.date).toLocaleDateString("en-GB")}</td>

              <td
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => onEdit(expense)}
                  style={{
                    padding: "6px 12px",
                    cursor: "pointer",
                    color: "#fff",
                    backgroundColor: "#0d6efd",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(expense._id)}
                  style={{
                    padding: "6px 12px",
                    cursor: "pointer",
                    color: "#fff",
                    backgroundColor: "#dc3545",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              No expenses found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ExpenseList;
