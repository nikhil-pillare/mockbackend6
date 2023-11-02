const mongoose= require('mongoose');

const subTaskSchema= mongoose.Schema({
   
       title : String,
       isCompleted : {type: String, default:false}
   },
{
    versionKey:false
}
)

const SubtaskModel= mongoose.model("subtask", subTaskSchema);

module.exports = SubtaskModel