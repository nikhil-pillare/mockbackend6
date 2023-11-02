const express = require("express");
const cors= require('cors')

const app= express();
const connection = require("./configuration/db")
const boardRouter = require("./routes/BoardRoute")
const SubtaskRouter= require("./routes/Subtask.route")
const TaskRouter= require("./routes/Task.route")
app.use(express.json());
app.use(cors())

app.use("/boards", boardRouter);
app.use("/tasks", TaskRouter);
app.use("/subtasks", SubtaskRouter);

app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }

    console.log(`running at port${process.env.PORT}`)
})