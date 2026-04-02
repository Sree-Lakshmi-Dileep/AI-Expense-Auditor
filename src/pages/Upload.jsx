import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReceiptForm from "../components/ReceiptForm";

function Upload() {
  const [file, setFile] = useState(null);
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
  if (!file || !purpose || !date) {
    alert("Fill all fields");
    return;
  }

  const newExpense = {
    merchant: file.name,
    amount: "$50",
    date,
    status: "Flagged",
    reason: "Pending audit"
  };

  // 🔥 Get existing data
  const existing = JSON.parse(localStorage.getItem("expenses")) || [];

  // 🔥 Add new expense
  const updated = [newExpense, ...existing];

  // 🔥 Save back
  localStorage.setItem("expenses", JSON.stringify(updated));

  navigate("/dashboard");
};
  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Expense</h2>

      <ReceiptForm
        file={file}
        setFile={setFile}
        purpose={purpose}
        setPurpose={setPurpose}
        date={date}
        setDate={setDate}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Upload;