import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#FACC15",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#F97316",
];

const PieChartComponent = ({ expenses }) => {
  // Group expenses by category
  const categoryData = expenses.reduce((acc, expense) => {
    const existing = acc.find((item) => item.name === expense.category);

    if (existing) {
      existing.value += expense.amount;
    } else {
      acc.push({
        name: expense.category,
        value: expense.amount,
      });
    }

    return acc;
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: "#111827",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <h3
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Expenses by Category
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {categoryData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
