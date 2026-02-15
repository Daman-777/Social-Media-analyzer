
# 🚀 Social Media Content Analyzer

A full-stack web application that analyzes social media content from PDF or image files.  
It extracts text, evaluates engagement potential, and provides improvement suggestions.

🌐 Live Demo:  
Frontend → https://social-media-analyzer-frontend-amkwgbb8k-daman-777s-projects.vercel.app  
Backend → https://social-media-analyzer-gg0l.onrender.com  

---

## 📌 Features

- 📄 PDF Text Extraction
- 🖼 Image OCR using Tesseract
- 📊 Custom Engagement Scoring Algorithm
- 🎯 Tone Detection (Promotional / Informative / Engaging)
- 💡 Content Improvement Suggestions
- 🌙 Animated Dark/Light Mode Toggle
- 🎨 Modern UI with smooth transitions
- 🚀 Deployed on Vercel (Frontend) & Render (Backend)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- CSS (Custom Styling)
- Animated Theme Toggle

### Backend
- Node.js
- Express.js
- Multer (File Upload)
- pdf-parse (PDF text extraction)
- Tesseract.js (OCR processing)
- CORS

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 🏗 Project Architecture

Client (React)
↓
Upload PDF / Image
↓
Express Backend
↓
Text Extraction (PDF / OCR)
↓
Custom Analysis Logic
↓
Return Engagement Score + Suggestions


---

## 📊 Engagement Scoring Logic

The system evaluates:

- Word Count
- Hashtag Usage
- Question Marks (Engagement)
- Exclamation Marks
- Call-to-Action Words

Score is dynamically calculated and displayed with a color-coded progress bar.

---

## ⚙️ Installation (Local Setup)

### 1️⃣ Clone Repository

git clone https://github.com/yourusername/Social-Media-analyzer.git
2️⃣ Backend Setup
cd server
npm install
node index.js
Runs on:

http://localhost:5000
3️⃣ Frontend Setup
cd client
npm install
npm run dev
Runs on:

http://localhost:5173
🌍 Deployment
Backend
Hosted on Render

Frontend
Hosted on Vercel

📈 Future Improvements
User authentication

Save analysis history (MongoDB)

AI-powered advanced suggestions

Platform-specific optimization (Instagram / LinkedIn)

Analytics dashboard

Drag-and-drop upload

🧠 What I Learned
Handling file uploads in Express

Working with PDF parsing and OCR

Managing Node version compatibility

Debugging production deployment issues

Implementing dynamic theme switching

Deploying full-stack applications

👨‍💻 Author
Daman Preet Singh
Full-Stack Developer
GitHub: https://github.com/Daman-777

⭐ If you found this project interesting, feel free to star the repository!
