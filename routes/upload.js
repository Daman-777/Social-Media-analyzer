const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");

const Tesseract = require("tesseract.js");
const fs = require("fs");
const analyzeText = require("../utils/analyze");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = req.file;
    let extractedText = "";

    if (file.mimetype === "application/pdf") {
      try {
        const buffer = fs.readFileSync(file.path);
        const data = await pdfParse(buffer);
        extractedText = data.text;
      } catch {
        throw new Error("Invalid PDF file.");
      }
    } else if (file.mimetype.startsWith("image/")) {
      const result = await Tesseract.recognize(file.path, "eng");
      extractedText = result.data.text;
    } else {
      throw new Error("Unsupported file type.");
    }

    const analysis = analyzeText(extractedText);

    fs.unlinkSync(file.path);

    res.json({
      extractedText,
      analysis,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Processing failed" });
  }
});

module.exports = router;
