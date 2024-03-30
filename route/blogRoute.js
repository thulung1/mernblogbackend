const express = require('express');
const blogRouter = express.Router();
const { fetchListOfBlogs, addNewBlog, deleteABlog, updateABlog, fetchBlog } = require('../controller/blogController')

blogRouter.get('/', fetchListOfBlogs);
blogRouter.get('/:id', fetchBlog)
blogRouter.post('/add', addNewBlog);
blogRouter.delete('/delete/:id', deleteABlog);
blogRouter.put('/update/:id', updateABlog);

module.exports = blogRouter