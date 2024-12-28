const createTask = require("../services/taskServices");

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

module.exports = newTask;
