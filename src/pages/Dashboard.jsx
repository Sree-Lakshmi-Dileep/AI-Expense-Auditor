import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenses"));

    if (!stored || stored.length === 0) {
      // 🔥 Insert dummy data first time
      const dummyExpenses = [
        {
          merchant: "KFC",
          amount: "$55",
          date: "2026-03-20",
          status: "Rejected",
          reason: "Meal limit is $40, claim was $55"
        },
        {
          merchant: "Uber",
          amount: "$18",
          date: "2026-03-19",
          status: "Approved",
          reason: "Within transport limit"
        },
        {
          merchant: "Marriott Hotel",
          amount: "$220",
          date: "2026-03-18",
          status: "Flagged",
          reason: "Exceeds standard lodging rate for region"
        }
      ];

      localStorage.setItem("expenses", JSON.stringify(dummyExpenses));
      setData(dummyExpenses);
    } else {
      setData(stored);
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Expense Dashboard</h2>

      {data.map((item, index) => (
        <StatusCard key={index} item={item} />
      ))}
    </div>
  );
}

export default Dashboard;