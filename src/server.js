const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "../public")));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Intentional error route
app.get("/error", (req, res) => {
  throw new Error("This is a deliberate error for testing.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
