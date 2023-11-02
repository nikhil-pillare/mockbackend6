const express = require("express");
const SubtaskRouter = express.Router();

const SubtaskModel= require("../models/subtask.model")

SubtaskRouter.post("/", async (req,res)=>{
    try {
        const {title, isCompleted} = req.body;
        const subtask = new SubtaskModel({ title, isCompleted});
        await subtask.save();
        res.status(200).json(subtask);
      } catch (error) {
        res.status(400).json({ "mgs":error.messege });
      }
})

module.exports = SubtaskRouter