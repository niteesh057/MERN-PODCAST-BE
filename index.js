var express = require('express');
const mongoose = require("mongoose");
const credentialRoute = require("./controller/userAdmin");
const cors = require("cors");
const bodyParser = require("body-parser");

var app = express();

mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://niteeshch57:12345@podcast-db.g14bwz8.mongodb.net/podcastdb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to Db"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/credentialRoute",credentialRoute);

app.listen(4000,()=>{
    console.log("Server Started at 4000");
})