const dotenv = require("dotenv");
const mongoose = require ('mongoose');
const express= require('express');
const app = express();

dotenv.config({path:"./config.env"});

require('./db/conn');
app.use(express.json());

app.use(require('./router/auth'));

const PORT=process.env.PORT;

const middleware = (req,res,next)=>{
    console.log(`middleware`);
    next();
}

//app.get('/', (req,res) => {
    //res.send(`hello me app`)})

app.get('/about',middleware, (req,res) => {
    res.send(`hello me`)})

app.get('/contact', (req,res) => {
    res.cookie("test",'sakri')
    res.send(`hello contact me`)
})

app.get('/Login', (req,res) => {
    res.send(`hello contact me`)
})
app.get('/Registration', (req,res) => {
    res.send(`hello register me`)
})
app.listen(PORT,()=>{
    console.log(`running at port no ${PORT}`)
})