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
  next(new Error("This is a deliberate error for testing."));
});

// New route for testing success for CCJ
app.get("/success", (req, res) => {
  res.status(200).send("This is a success message.");
});

// New route for testing failure
app.get("/fail", (req, res) => {
  res.status(404).send("This route should not be accessed.");
});

// Start the server only if this file is the main module
let server;
if (require.main === module) {
  server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Export the app and server for testing
module.exports = { app, server: server || null }; // Ensure it's exported as null if not running
