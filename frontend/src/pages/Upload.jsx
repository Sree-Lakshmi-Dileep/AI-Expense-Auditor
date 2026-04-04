import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReceiptForm from "../components/ReceiptForm";

function Upload() {
  const [file, setFile] = useState(null);
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
  if (!file || !purpose || !date) {
    alert("Fill all fields");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("purpose", purpose);
    formData.append("date", date);

    const res = await fetch("http://127.0.0.1:8000/audit", {
      method: "POST",
      body: formData
    });

    const result = await res.json();

    const existing = JSON.parse(localStorage.getItem("expenses")) || [];
    const updated = [result, ...existing];

    localStorage.setItem("expenses", JSON.stringify(updated));

    navigate("/dashboard");
  } catch (error) {
    console.error(error);
    alert("Error connecting to backend");
  }
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