from fastapi import FastAPI, UploadFile, Form

app = FastAPI()

@app.post("/audit")
async def audit_expense(
    file: UploadFile,
    purpose: str = Form(...),
    date: str = Form(...)
):
    amount = 50

    if amount > 40:
        status = "Rejected"
        reason = "Amount exceeds limit"
    else:
        status = "Approved"
        reason = "Within limit"

    return {
        "merchant": file.filename,
        "amount": f"${amount}",
        "date": date,
        "status": status,
        "reason": reason
    }