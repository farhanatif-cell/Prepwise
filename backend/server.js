const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "PrepWise API is running",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);

// Export app for Vercel
module.exports = app;

// Run server locally
if (require.main === module) {
  const PORT = process.env.PORT || 5001;

  app.listen(PORT, () => {
    console.log(`PrepWise backend running on port ${PORT}`);
  });
}