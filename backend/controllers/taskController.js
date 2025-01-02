const {
  createTask,
  updateTaskById,
  getTasksByUser,
} = require("../services/taskServices");

const newTask = async (req, res) => {
  try {
    const { taskName, description, status } = req.body;
    const userId = req.user.id;
    const task = await createTask({ userId, taskName, description, status });

    return res.status(201).json({ success: true, data: task });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskName, description, status } = req.body;
    const { id } = req.params;
    const updatedTaskData = await updateTaskById(id, {
      taskName,
      description,
      status,
    });
    return res.status(200).json({ success: true, data: updatedTaskData });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const viewTasksByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await getTasksByUser(userId);
    return res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { newTask, updateTask, viewTasksByUser };
