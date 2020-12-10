const Task = require('../model/dataModel');
const User = require('../model/userModel');
const mongoose = require('mongoose');

let array;
let id;

module.exports.main_get = async (req,res) => {
   await Task.find()
   .then((result)=> {
       res.render('main' , {result})
   })
   
   .catch((err)=>console.log(err))
}

module.exports.main_post = async (req,res) => {

    const task = req.body.value;
    const array = req.body.value;
    try {
        const tasks = await Task.create({task})
        res.json(tasks)
        
    } catch (error) {
        console.log(error);
    }
    
    console.log(req.body.value);
    
    // res.status(201).json({ array });
}

module.exports.data_get = (req,res) => {

    res.json(id)

}

module.exports.data_post = async (req,res) => {
   
    //Id have a extra space, so we have to delete it. 
    const id = req.body.value.replace(" " , "");
     await Task.findByIdAndDelete(id)
    .then((result)=>{
        console.log('Item successfully deleted!');
        res.header(201).json('Item successfully deleted!')
    })
    .catch((err)=>{console.log(err)})
}

//Login and register

module.exports.register_get = async (req,res) => {
    res.render('register');
}
module.exports.register_post = async (req,res) => {

    const {email , password} = req.body
    res.json({email , password})
    console.log(email , password);
    
    try {
        const user = await User.create({email , password})
    } catch (error) {
        console.log(error);
    }
   
    
    
}
module.exports.login_get = async (req,res) => {
    res.render('login');
}
module.exports.login_post = async (req,res) => {}

