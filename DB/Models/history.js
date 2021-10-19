const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    url:{
        type: String,
        required:true,
        trim:true
    },
    timeDate:{
        type:String,
    }
})

const Url = mongoose.model('History',historySchema);

module.exports = {Url}