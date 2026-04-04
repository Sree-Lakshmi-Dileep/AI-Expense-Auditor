import { useNavigate } from "react-router-dom";

function StatusCard({ item }) {
  const navigate = useNavigate();

  const getStyle = (status) => {
    if (status === "Approved")
      return { background: "#e6f4ea", color: "green" };
    if (status === "Flagged")
      return { background: "#fff4e5", color: "orange" };
    return { background: "#fdecea", color: "red" };
  };

  return (
    <div
      style={styles.card}
      onClick={() => navigate("/detail", { state: item })}
    >
      <div style={styles.header}>
        <h3>{item.merchant}</h3>
        <span style={{ ...styles.badge, ...getStyle(item.status) }}>
          {item.status}
        </span>
      </div>

      <p><strong>Amount:</strong> {item.amount}</p>
      <p><strong>Date:</strong> {item.date}</p>

      <p style={styles.reason}> {item.reason}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    cursor: "pointer", 
    transition: "0.2s"
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
  }
};

export default StatusCard;