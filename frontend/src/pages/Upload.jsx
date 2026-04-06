import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
     if (!file ) {
      alert("Please fill all fields before submitting!");
      return; // Stop submission
    }
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("purpose", "Food");
      formData.append("date", "2026-04-06");

      const response = await fetch("http://127.0.0.1:8000/audit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      const existing = JSON.parse(localStorage.getItem("expenses")) || [];

      const newExpense = {
        merchant: data.merchant,
        amount: data.amount,
        date: data.date,
        status: data.status,
        reason: data.reason,
      };

      const updated = [newExpense, ...existing];
      localStorage.setItem("expenses", JSON.stringify(updated));

      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Upload Receipt</h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.submitButton}>
          Submit
        </button>

        {result && (
          <div style={styles.result}>
            <h3>Result:</h3>
            <p><strong>Amount:</strong> {result.amount}</p>
            <p><strong>Status:</strong> {result.status}</p>
            <p><strong>Reason:</strong> {result.reason}</p>
          </div>
        )}

        <button
          onClick={() => navigate("/dashboard")}
          style={styles.navButton}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f9f9f9",
    padding: "20px",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center",
  },
  input: {
    margin: "15px 0",
    width: "100%",
  },
  submitButton: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  navButton: {
    background: "#28a745",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    margin: "15px 0",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "left",
    background: "#f8f9fa",
  },
};

export default Upload;