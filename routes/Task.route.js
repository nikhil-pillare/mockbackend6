const express = require("express");
const TaskRouter = express.Router();

const TaskModel = require("../models/task.model")

TaskRouter.post("/", async(req,res)=>{
    try {
        const {title, description, status, subtasks ,id}= req.body;
        const task = new TaskModel({ title, description, status,subtasks,id});
        await task.save();
        res.status(200).json(task);
      } catch (error) {
        res.status(400).json({"msg":error.message});
      }
})

TaskRouter.get("/", async(req,res)=>{
    try {
        const tasks = await TaskModel.find();
        res.json(tasks);
      } catch (error) {
        res.status(400).json({"msg":error.message});
      }
})

TaskRouter.patch("/:taskid", async(req,res)=>{
    try {
        const {taskid} = req.params;
        const {status} = req.body;
        const task = await TaskModel.findByIdAndUpdate(taskid,{status}, {new: true}
        );
        if (!task) {
          return res.status(400).json({"msg":error.message});
        }
        res.json(task);
      } catch (error) {
        res.status(400).json({"msg":error.message});
      }
})

TaskRouter.delete("/:taskid", async(req,res)=>{
    try {
        const {taskid} = req.params;
        
        const task = await TaskModel.findByIdAndDelete(taskid);
        if (!task) {
          return res.status(400).json({"msg":error.message});
        }
        res.json(task);
      } catch (error) {
        res.status(400).json({"msg":error.message});
      }
})

module.exports= TaskRouter