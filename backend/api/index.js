const express = require("express");
const cors = require("cors");
const connectDB = require("../backend/config/db");

const authRoutes = require("../backend/routes/authRoutes");
const questionRoutes = require("../backend/routes/questionRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "PrepWise API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);

module.exports = app;