/* =========================================================
   PREPWISE BACKEND — now with a REAL database (MongoDB)
   ---------------------------------------------------------
   What changed from the JSON-file version:
   - Instead of reading/writing questions.json and sessions.json,
     we now talk to MongoDB using a library called "mongoose."
   - Mongoose lets us use simple commands like
     Question.find() and Session.create() instead of manually
     reading and writing files ourselves.
   - Your data now lives in the cloud (MongoDB Atlas), so it's
     not tied to just this one laptop anymore.
========================================================= */

require("dotenv").config(); // loads the MONGO_URI from your .env file
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Question = require("./models/Question");
const Session = require("./models/Session");

const app = express();
const PORT = 3000;

app.use(express.json());
// This line serves the frontend, which now lives in a separate
// top-level "frontend" folder, one level up from this backend folder.
app.use(express.static(path.join(__dirname, "..", "frontend")));

/* ---------------------------------------------------------
   CONNECT TO MONGODB
   mongoose.connect() returns a Promise — it takes a moment
   to actually reach the database, so we wait for it before
   saying the connection succeeded (or failed).
--------------------------------------------------------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((err) => console.error("MongoDB connection failed:", err.message));

/* ---------------------------------------------------------
   ROUTE 1: GET /api/questions
   Question.find({}) means "get me everything in the
   questions collection" — similar to SELECT * in SQL.
--------------------------------------------------------- */
app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Could not load questions." });
  }
});

/* ---------------------------------------------------------
   ROUTE 2: POST /api/sessions
   Session.create() builds a new document and saves it to
   MongoDB in one step.
--------------------------------------------------------- */
app.post("/api/sessions", async (req, res) => {
  try {
    const newSession = await Session.create({ answers: req.body.answers });
    res.json({ success: true, session: newSession });
  } catch (err) {
    res.status(500).json({ error: "Could not save session." });
  }
});

/* ---------------------------------------------------------
   ROUTE 3: GET /api/sessions
   Session.find({}) gets every saved session, so the
   Dashboard can calculate topic-wise accuracy from real data.
--------------------------------------------------------- */
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
