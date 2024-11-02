const TaskModal = require("../models/task.model")

const getTasks = async(req,res)=>{
console.log("Inside get tasks",req.query?.search)    
const limit = req.query.limit ? Number(req.query.limit) : 5;
const page = req.query.page ? Number(req.query.page) : 1;

const query = req.query?.search ? { title: { $regex: req.query.search, $options: 'i' } } : {};
console.log(query,"query???")
const getTasks = await TaskModal.find(query).skip(limit * (page - 1)).limit(limit).sort({ createdAt: -1 });
const countDocuments = await TaskModal.countDocuments(query);
console.log(getTasks,"getTasks")
const pages = Math.ceil(countDocuments / limit);
res.status(200).json({data:getTasks,page:1,count:countDocuments,pages:pages});
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