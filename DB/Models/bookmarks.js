const mongoose = require('mongoose');

const BookmarksSchema = new mongoose.Schema({
    url:{
        type: String,
        required:true,
        trim:true
    }
})

const Bookmark = mongoose.model('Bookmarks',BookmarksSchema);

module.exports = {Bookmark}