const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller")
router.get('/get/tasks',taskController.getTasks)
router.post("/create/task",taskController.createTasks);

module.exports = router