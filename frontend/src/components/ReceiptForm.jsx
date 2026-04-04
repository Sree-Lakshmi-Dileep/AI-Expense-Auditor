function ReceiptForm({ file, setFile, purpose, setPurpose, date, setDate }) {
  return (
    <>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      {file && <p>{file.name}</p>}

      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <textarea
        placeholder="Business purpose"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
      />
    </>
  );
}

export default ReceiptForm;