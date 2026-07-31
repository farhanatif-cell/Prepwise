/* =========================================================
   PREPWISE BACKEND — a simple Express server
   ---------------------------------------------------------
   What this file does, in plain words:
   1. Starts a small web server on your computer.
   2. Reads questions from a JSON file (our "database" for now).
   3. Lets the frontend save mock-interview results by sending
      them here, which get saved into another JSON file.
   4. Lets the frontend ask "what have I done so far?" to build
      the Dashboard page.

   Why a JSON file instead of a real database (like MongoDB)?
   - It's simpler to set up in just a few days.
   - It still proves the concept: data is saved on the SERVER,
     not just in the browser — so it survives a refresh.
   - You can swap this for MongoDB later without changing much
     of the frontend code.
========================================================= */

const express = require("express");   // the web server tool
const fs = require("fs");             // lets us read/write files
const path = require("path");         // helps build file paths safely

const app = express();
const PORT = 3000;

// Paths to our two "database" files
const QUESTIONS_FILE = path.join(__dirname, "data", "questions.json");
const SESSIONS_FILE = path.join(__dirname, "data", "sessions.json");

/* ---------------------------------------------------------
   MIDDLEWARE
   "Middleware" = code that runs on every request before your
   own route code does. Here we just tell Express:
   1. Understand JSON sent from the frontend (express.json())
   2. Serve our frontend files (the "public" folder) directly
--------------------------------------------------------- */
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ---------------------------------------------------------
   Small helper functions to read/write our JSON "database"
--------------------------------------------------------- */
function readJSON(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/* ---------------------------------------------------------
   ROUTE 1: GET /api/questions
   The frontend calls this to get the list of questions.
   "GET" = just asking for data, not changing anything.
--------------------------------------------------------- */
app.get("/api/questions", (req, res) => {
  const questions = readJSON(QUESTIONS_FILE);
  res.json(questions);
});

/* ---------------------------------------------------------
   ROUTE 2: POST /api/sessions
   The frontend calls this AFTER a mock interview finishes,
   sending the results so we can save them.
   "POST" = sending new data to be saved.
--------------------------------------------------------- */
app.post("/api/sessions", (req, res) => {
  const sessions = readJSON(SESSIONS_FILE);

  const newSession = {
    id: Date.now(),                 // a simple unique ID using the current time
    date: new Date().toISOString(),
    answers: req.body.answers,      // e.g. [{ topic: "Behavioral", score: 80 }, ...]
  };

  sessions.push(newSession);
  writeJSON(SESSIONS_FILE, sessions);

  res.json({ success: true, session: newSession });
});

/* ---------------------------------------------------------
   ROUTE 3: GET /api/sessions
   The frontend calls this to build the Dashboard page —
   it needs to know every session that's been saved so far.
--------------------------------------------------------- */
app.get("/api/sessions", (req, res) => {
  const sessions = readJSON(SESSIONS_FILE);
  res.json(sessions);
});

/* ---------------------------------------------------------
   START THE SERVER
--------------------------------------------------------- */
app.listen(PORT, () => {
  console.log(`PrepWise server running! Open http://localhost:${PORT} in your browser.`);
});
