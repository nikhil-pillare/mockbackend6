const express = require("express");
const boardRouter = express.Router();
const BoardModel = require("../models/board.model")
boardRouter.post('/', async(req,res)=>{
    try {
        const { name } = req.body;
        const board = new BoardModel({ name });
        await board.save();
        res.status(201).json(board);
      } catch (error) {
        res.status(400).json({ "mgs":error.messege });
      }
})

boardRouter.get("/",async(req,res)=>{
    try {
        const board = await BoardModel.find();
        res.json(board);
      } catch (error) {
        res.status(400).json({ "mgs":"error in router"});
      }
})

boardRouter.patch("/:id", async(req,res)=>{
    try {
        const { id}= req.params;
        const { name}= req.body;
        const board = await BoardModel.findByIdAndUpdate(
           id,
          {name},
          {new:true}
        );
        if(!board){
          return res.status(400).json({ "mgs":error.messege });
        }
        res.json(board);
      } catch (error) {
        res.status(400).json({ "mgs":error.messege });
      }
})

boardRouter.delete("/:id", async(req,res)=>{
    try {
        const { id}= req.params;
        
        const board = await BoardModel.findByIdAndDelete(id);
        if(!board){
          return  res.status(400).json({ "mgs":error.messege });
        }
        res.json(board);
      } catch (error) {
        res.status(400).json({ "mgs":error.messege });
      }
})

module.exports = boardRouter