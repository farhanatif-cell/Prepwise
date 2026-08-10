const express = require("express");
const Question = require("../models/Question");

const router = express.Router();


// Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });

    res.json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch questions",
      error: error.message,
    });
  }
});


// Get questions by category
router.get("/category/:category", async (req, res) => {
  try {
    const questions = await Question.find({
      category: req.params.category,
    });

    res.json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch questions",
      error: error.message,
    });
  }
});


module.exports = router;