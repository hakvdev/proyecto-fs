const express = require("express");
const newTask = require("../controllers/taskController");
const { verifyToken } = require("../controllers/authController");
const router = express.Router();

router.post("/create-task", verifyToken, newTask);

module.exports = router;
