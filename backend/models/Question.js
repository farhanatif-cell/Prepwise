
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  id: Number,
  topic: String,
  text: String,
  keywords: [String],
});


module.exports = mongoose.model("Question", questionSchema);
