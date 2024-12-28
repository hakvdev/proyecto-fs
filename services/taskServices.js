const Task = require("../models/Task");

const createTask = async ({ userId, taskName, description, status }) => {
  if (!taskName) {
    throw new Error("Task name is required");
  }
  const task = new Task({ userId, taskName, description, status });

  return await task.save();
};

const updateTask = () => {};

const readTask = () => {};

const deleteTask = () => {};

module.exports = createTask;
