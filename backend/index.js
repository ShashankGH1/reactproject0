const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

//MongoDB Altas Connection
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://shashank:123@cluster0.tej0x9p.mongodb.net/");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

//Creating a app
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/students",studentRoute);

//Listening to a port number
app.listen(4000,()=>{
    console.log("Server started at 4000");
})
