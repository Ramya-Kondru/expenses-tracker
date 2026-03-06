import React from "react";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <h2>💰 Expense Calculator</h2>
      <div>
        <button style={styles.btn}>Profile</button>
        <button style={styles.btn}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#282c34",
    color: "white",
  },
  btn: {
    marginLeft: "10px",
    padding: "5px 10px",
  },
};

export default Navbar;
