const dotenv = require("dotenv");

// Load .env FIRST
dotenv.config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");


const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "PrepWise API is running",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);

// Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`PrepWise backend running on port ${PORT}`);
});