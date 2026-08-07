const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  answers: [
    {
      topic: String,
      score: Number,
    },
  ],
});

module.exports = mongoose.model("Session", sessionSchema);
