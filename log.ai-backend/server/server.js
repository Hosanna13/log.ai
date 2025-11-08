require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("../config/db");
const noteRoutes = require("../routes/notesRoutes");
const userRoutes = require("../routes/userRoutes");

const app = express();

// Middleware 
app.use(express.json());
app.use(cors());

// Connect to mongodb
connectDb();

// Routes
app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

// test 
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});