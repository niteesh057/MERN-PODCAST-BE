const mongoose = require("mongoose");
const userplaylistSchema = new mongoose.Schema({
    "user_id":{type:String},
    "podcast_id":{type:String}
},{
    collection: "userplaylist"
});

module.exports = mongoose.model("userplaylistSchema",userplaylistSchema);
