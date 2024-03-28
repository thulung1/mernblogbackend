const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now,
    }
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog