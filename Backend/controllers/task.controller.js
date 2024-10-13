const TaskModal = require("../models/task.model")

const getTasks = async(req,res)=>{
console.log("Inside get tasks")    
const limit = req.query.limit ? Number(req.query.limit) : 10;
const page = req.query.page ? Number(req.query.page) : 1;
const query = req.query?.search ? {title:req.query?.search}:{}    
const getTasks = await TaskModal.find(query).skip(limit * (page - 1)).limit(limit).sort({ createdAt: -1 });
console.log(getTasks,"getTasks")
res.status(200).json({data:getTasks})
}

const createTasks = async(req,res)=>{
    console.log(req.body,"reqBody")
const createTask = await TaskModal.create({
    title:req.body.title,
    description:req.body.description
})
res.status(200).json({data:createTask})
}

module.exports = {getTasks,createTasks}