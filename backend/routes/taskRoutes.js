const express = require("express");
const { verifyToken } = require("../controllers/authController");
const {
  newTask,
  updateTask,
  viewTasksByUser,
} = require("../controllers/taskController");
const router = express.Router();

router.post("/create-task", verifyToken, newTask);
router.put("/:id", verifyToken, updateTask);
router.get("/:userId", verifyToken, viewTasksByUser);

module.exports = router;
