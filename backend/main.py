from fastapi import FastAPI, UploadFile, Form, File
import pytesseract
from PIL import Image
import io
import re
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/audit")
async def audit_expense(
    file: UploadFile = File(...),
    purpose: str = Form(...),
    date: str = Form(...)
):
    # Read image
    contents = await file.read()
    img = Image.open(io.BytesIO(contents))

    # OCR
    text = pytesseract.image_to_string(img)

    # Extract amount
    match = re.search(r'(TOTAL|Total).*?(\d+\.\d+)', text)
    amount = float(match.group(2)) if match else 0

    
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
        "purpose": purpose,
        "status": status,
        "reason": reason,
        "raw_text": text   # optional (debug)
    }