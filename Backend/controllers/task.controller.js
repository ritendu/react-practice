const TaskModal = require("../models/task.model")

const getTasks = async(req,res)=>{
const getTasks = await TaskModal.find({});
res.status(200).json({data:getTasks})
}

const createTasks = async(req,res)=>{
    console.log(req.body,"reqBody")
const createTask = await TaskModal.create({
    title:req.body.title
})
res.status(200).json({data:createTask})
}

module.exports = {getTasks,createTasks}