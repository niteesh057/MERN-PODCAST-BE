const mongoose = require("mongoose");
const credentialSchema = new mongoose.Schema({
    "userName":{type:String},
    "email":{type:String},
    "password":{type:String},
    "type":{type:String}
},{
    collection: "credential"
});

module.exports = mongoose.model("credentialSchema",credentialSchema);
