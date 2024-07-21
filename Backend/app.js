const express = require("express");
const app = express();
const taskRoutes = require("./routes/task.route")
const {mongoDBConn} = require("./db")
var cors = require('cors')
app.use(cors())
app.options("*", cors());
mongoDBConn();

app.use(express.json())

app.use('/v1',taskRoutes)
app.listen(4000,()=>{
    console.log("App is running")
})