
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

## 📝 Approach & Implementation (Assessment Write-Up)

This project was designed as a full-stack Social Media Content Analyzer that processes uploaded PDF and image files to evaluate engagement potential. The frontend was built using React (Vite) with a responsive and modern UI, including loading states and an animated dark/light mode toggle for improved user experience.

The backend was developed using Node.js and Express, handling file uploads with Multer. For text extraction, PDF parsing was implemented using the pdf-parse library, while image files were processed using Tesseract.js for Optical Character Recognition (OCR). Extracted text is analyzed through a custom engagement scoring algorithm that evaluates word count, hashtag presence, punctuation signals, and call-to-action keywords.

Basic error handling and file validation were added to ensure robustness. The application supports both file picker and drag-and-drop uploads. The frontend is deployed on Vercel and the backend on Render, ensuring full-stack production deployment.

The overall approach focused on clean code structure, modularity, and meeting all technical requirements within the given time constraints.

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
