const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  taskName: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["done", "in progress", "pending"],
    default: "pending",
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
