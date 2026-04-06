# Policy-First Expense Auditor (Frontend Demo)

## The Problem
Corporate finance teams manually audit every employee expense against a long and complex Travel & Expense Policy. This is slow, inconsistent, and prone to errors. High receipt volumes and varying limits based on location or seniority cause delays and "Spend Leakage."

## The Solution
This project provides a **frontend demo** of an automated expense auditor:
- Employees can upload receipts and provide the business purpose.
- Each claim is assigned a status: Approved, Flagged, or Rejected.
- A dashboard displays all claims with details and allows deletion.
- Data is stored in **localStorage** for persistence (demo mode).

## Tech Stack
- **Programming Languages:** JavaScript
- **Frontend Framework:** React.js ( Create React App)
- **State Management:** useState, localStorage (for storing expenses)
- **Routing:** React Router (`/upload` and `/dashboard`)
- **Styling:** Inline CSS (simple white-background forms and status cards)
- **Backend (optional for future extension):** FastAPI + Python
- **OCR Tool (optional):** Tesseract OCR (for extracting receipt text)

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd expense-auditor

2. Install Frontend Dependencies
cd frontend
npm install

3. Run Frontend
npm start

4. Backend Setup
cd backend
python -m pip install fastapi uvicorn python-multipart pytesseract pillow
uvicorn main:app --reload

Ensure Tesseract OCR is installed and added to PATH for OCR functionality if using backend OCR/audit.

5. Open the App
Frontend runs at: http://localhost:3000
Dashboard available at: /dashboard
Upload receipts at: /upload