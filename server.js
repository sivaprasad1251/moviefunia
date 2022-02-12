const express = require("express");
const app= express();
const cors = require('cors');

require('./users/passportConfig');
const passport = require('passport');

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MovieFunia",(err)=>{

    if(err){
        console.log("error while connecting to db", err);
    }else{
        console.log("successfully connected to database")
    }
});

app.use(express.json());

app.use(cors());

app.use(passport.initialize());

app.get("/", (req, res)=>{
    res.status(200).send("welcome to node CRUD apis");
})

app.use('/users', require("./users/router"));



const server = app.listen(3000, ()=>{
    console.log("my server started on port number :3000");
});