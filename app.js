const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose')
const app = express();
const Router = require('./routes/mainRouter')

mongoose.connect('mongodb+srv://test123:test123@cluster0.chn8e.mongodb.net/todo?retryWrites=true&w=majority' , { useNewUrlParser: true  , useUnifiedTopology: true  })
.then(app.listen(3000 , ()=>console.log('server started successfully')))
app.use(express.json());

app.use(express.static('public'));
app.set('view engine' , 'ejs');
app.use(Router)


