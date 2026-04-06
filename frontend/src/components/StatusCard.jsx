import { useNavigate } from "react-router-dom";

function StatusCard({ item, index, refresh }) {
  const getStyle = (status) => {
    if (status === "Approved")
      return { background: "#e6f4ea", color: "green" };
    if (status === "Flagged")
      return { background: "#fff4e5", color: "orange" };
    return { background: "#fdecea", color: "red" };
  };

  const handleDelete = () => {
    // Get current expenses
    const stored = JSON.parse(localStorage.getItem("expenses")) || [];
    // Remove the item at this index
    stored.splice(index, 1);
    // Save updated array
    localStorage.setItem("expenses", JSON.stringify(stored));
    // Trigger refresh in parent
    refresh();
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>{item.merchant}</h3>
        <span style={{ ...styles.badge, ...getStyle(item.status) }}>
          {item.status}
        </span>
      </div>

      <p><strong>Amount:</strong> {item.amount}</p>
      <p><strong>Date:</strong> {item.date}</p>
      <p style={styles.reason}>💬 {item.reason}</p>

      <button style={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  badge: {
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold"
  },
  reason: {
    marginTop: "10px",
    color: "#555"
  },
  deleteButton: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default StatusCard;