
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

  await Question.deleteMany({});
  await Question.insertMany(questions); 

  console.log(`Seeded ${questions.length} questions into the database.`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
