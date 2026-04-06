import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";

function Dashboard() {
  const [data, setData] = useState([]);

  // Function to refresh the dashboard from localStorage
  const loadExpenses = () => {
    const stored = JSON.parse(localStorage.getItem("expenses")) || [];
    setData(stored);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <div style={{ padding: "20px", minHeight: "100vh", background: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Expense Dashboard</h2>

      {data.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>No expenses uploaded yet.</p>
      ) : (
        data.map((item, index) => (
          <StatusCard
            key={index}
            item={item}
            index={index}
            refresh={loadExpenses} // 🔥 Pass refresh function
          />
        ))
      )}
    </div>
  );
}

export default Dashboard;