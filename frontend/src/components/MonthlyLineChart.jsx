import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MonthlyLineChart = ({ expenses }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyExpenses = {};

  months.forEach((month) => {
    monthlyExpenses[month] = 0;
  });

  expenses.forEach((expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "short",
    });

    monthlyExpenses[month] += expense.amount;
  });

  const data = months.map((month) => ({
    month,
    amount: monthlyExpenses[month],
  }));

  return (
    <div
      style={{
        width: "100%",
        background: "#111827",
        borderRadius: "18px",
        padding: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
      }}
    >
      <h3
        style={{
          color: "#fff",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Monthly Expense Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#2A3445" strokeDasharray="4 4" />

          <XAxis
            dataKey="month"
            tick={{ fill: "#D1D5DB", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#D1D5DB", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value) => [`₹${value}`, "Expenses"]}
            contentStyle={{
              background: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#D9FF3F"
            strokeWidth={3}
            dot={{
              fill: "#D9FF3F",
              stroke: "#111827",
              strokeWidth: 2,
              r: 5,
            }}
            activeDot={{
              r: 8,
              fill: "#D9FF3F",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyLineChart;
