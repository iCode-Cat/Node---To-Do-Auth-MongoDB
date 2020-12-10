const mongoose = require('mongoose');
const { Router } = require('express');
const router = Router()
let id;


const taskSchema = new mongoose.Schema({

    task:{
        _id:String,
        type:String,
        required:true
    }

})

// taskSchema.post('save' , function(doc,next){
//     console.log('new data saved' , doc);
//     id = doc
//     next();
// })

module.exports.data_get = async (req,res) => {
  res.json('test')
  
    }

router.get('/id' , (req,res)=> {
    res.json(id)
})


const Task = mongoose.model('task' , taskSchema);
module.exports = Task;
