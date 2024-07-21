const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
 title:{
    type:String
 }
})

module.exports = mongoose.model("Task",taskSchema)