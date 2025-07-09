# 🧠 AI Powered Code Reviewer

A full-stack application that reviews code snippets using Google Gemini AI. It provides intelligent feedback on code quality, best practices, and improvements.

## 🚀 Features
- Upload and review code snippets
- Detailed AI-powered code analysis
- Frontend built with React + Tailwind CSS
- Backend using Express.js and Google Gemini API

## 📦 Tech Stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express.js
- AI: Google Generative AI (Gemini)
- Styling: PrismJS for syntax highlighting

## 📂 Project Structure
AI Powered Code Reviewer/
├── Backend/
│ ├── src/
│ │ ├── controller/
│ │ ├── routes/
│ │ ├── services/
│ │ └── app.js
│ ├── .env
│ └── server.js
├── Frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ └── index.html
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 📌 Prerequisites
- Node.js (v18+ recommended)
- npm
- Google Gemini API Key

---

### 🔑 Environment Variables
Create a `.env` file inside `Backend` directory:
GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here

yaml
Copy
Edit

---

### 🖥️ Install & Run

#### Backend
```bash
cd Backend
npm install
npm run dev
Server will start at https://localhost:3000

Frontend

cd Frontend
npm install
npm run dev
Frontend will run at http://localhost:5173

