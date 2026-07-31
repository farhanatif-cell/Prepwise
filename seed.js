/* =========================================================
   SEED SCRIPT — run this ONCE to load starter questions into
   your MongoDB database. "Seeding" just means filling an
   empty database with some starting data.

   Run it with:  npm run seed
========================================================= */
require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Question = require("./models/Question");

const QUESTIONS_FILE = path.join(__dirname, "data", "questions.json");

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB...");

  const questions = JSON.parse(fs.readFileSync(QUESTIONS_FILE, "utf-8"));

  await Question.deleteMany({}); // clear out anything already there
  await Question.insertMany(questions); // insert all our starter questions

  console.log(`Seeded ${questions.length} questions into the database.`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
