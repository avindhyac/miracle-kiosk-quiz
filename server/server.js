const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxFWQFuDZfNBLlgxJAMvK56Q1r5_y6EAG60fRPIgJc7JFI84izjxbscOWoWvvavTT9S/exec"; // Replace with your actual Google Sheets Web App URL

app.post("/submit", async (req, res) => {
  try {
    const formData = req.body;
    const response = await axios.post(GOOGLE_SHEETS_URL, formData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    res.status(200).json({ message: "Data forwarded successfully!", data: response.data });
  } catch (error) {
    console.error("Error forwarding data:", error);
    res.status(500).json({ message: "Error forwarding data", error: error.message });
  }
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
