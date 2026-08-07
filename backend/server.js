require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Question = require("./models/Question");
const Session = require("./models/Session");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((err) => console.error("MongoDB connection failed:", err.message));

app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Could not load questions." });
  }
});

app.post("/api/sessions", async (req, res) => {
  try {
    const newSession = await Session.create({ answers: req.body.answers });
    res.json({ success: true, session: newSession });
  } catch (err) {
    res.status(500).json({ error: "Could not save session." });
  }
});

app.get("/api/sessions", async (req, res) => {
  try {
    const sessions = await Session.find({});
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: "Could not load sessions." });
  }
});

app.listen(PORT, () => {
  console.log(`PrepWise server running! Open http://localhost:${PORT} in your browser.`);
});
