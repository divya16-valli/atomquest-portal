const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  title: String,
  description: String,
  target: Number,
  weightage: Number,
  status: {
    type: String,
    default: "draft"
  }
});

module.exports = mongoose.model("Goal", GoalSchema);