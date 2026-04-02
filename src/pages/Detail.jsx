import { useLocation } from "react-router-dom";

function Detail() {
  const { state } = useLocation();

  if (!state) return <p>No data</p>;

  return (
    <div style={styles.container}>
      {/* LEFT */}
      <div style={styles.left}>
        <h3> Receipt</h3>
        <p>{state.merchant}</p>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <h3> Audit Result</h3>
        <p><strong>Amount:</strong> {state.amount}</p>
        <p><strong>Date:</strong> {state.date}</p>
        <p><strong>Status:</strong> {state.status}</p>
        <p><strong>Reason:</strong> {state.reason}</p>

        <h4> Policy Rule</h4>
        <p>Meal limit is $40 per day</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: "20px",
    gap: "20px"
  },
  left: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "10px"
  },
  right: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "10px"
  }
};

export default Detail;