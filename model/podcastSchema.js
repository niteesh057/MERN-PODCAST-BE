const mongoose = require("mongoose");
const podcastSchema = new mongoose.Schema({
    "admin_id":{type:String},
    "podcast_url":{type:String},
    "zoner":{type:String},
    "podcast_name":{type:String}
},{
    collection: "podcast"
});


module.exports = mongoose.model("podcastSchema",podcastSchema);
