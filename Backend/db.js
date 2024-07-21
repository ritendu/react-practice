const mongoose = require("mongoose");
const mongoDBConn = ()=>{
mongoose.connect("mongodb://localhost:27017/taskDB").then(()=>{
console.log("MongoDB connection successful..")
}).catch(err=>{
    console.log(err,"err")
})
}

module.exports = {mongoDBConn}