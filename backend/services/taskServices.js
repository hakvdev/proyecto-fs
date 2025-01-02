const Task = require("../models/Task");

const createTask = async ({ userId, taskName, description, status }) => {
  if (!taskName) {
    throw new Error("Task name is required");
  }
  const task = new Task({ userId, taskName, description, status });

  return await task.save();
};

const updateTaskById = async (id, { taskName, description, status }) => {
  if (!id) {
    throw new Error("Task ID is required");
  }

  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { taskName, description, status },
    { new: true } // Devuelve la tarea actualizada
  );

  if (!updatedTask) {
    throw new Error("Task not found");
  }

  return updatedTask;
};

const getTasksByUser = (userId) => {
  return Task.find({ userId });
};

const deleteTask = () => {};

module.exports = { createTask, updateTaskById, getTasksByUser };
