const express = require("express");
const credentialSchema = require("../model/credentialSchema");
const podcastSchema = require("../model/podcastSchema");
const credentialRoute = new express.Router();
const userData = {name: "Ram", email: "kd@gmail.com", password: "lkda", type:"admin"}
credentialRoute.post("/create-credential",(userData,res)=>{
    credentialSchema.create(userData.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

credentialRoute.get("/",(req,res)=>{
    credentialSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = credentialRoute;