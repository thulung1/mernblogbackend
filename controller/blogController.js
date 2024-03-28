const mongoose = require("mongoose");
const Blog = require("../model/Blog");

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    console.log(error);
  }

  if (!blogList) {
    return res.status(404).json({
      message: "No Blogs Found",
    });
  }

  return res.status(200).json({
    blogList,
  });
};

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  try {
    const newlyCreatedBlog = await Blog.create({
      title,
      description,
      date: currentDate
    });
    return res.status(200).json({
      newlyCreatedBlog,
    });
  } catch (error) {
    return res.status(411).json({
      message: "Something went wrong",
    });
  }
};

const deleteABlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    return (
      res.status(200).json({
        message: "Successfully deleted",
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Unable to delete ! Please try again",
    });
  }
};

const updateABlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
    if (!currentBlogToUpdate) {
      return res.status(500).json({
        message: "Unable to update",
      });
    }
  
    return res.status(200).json({
      message: "Successfully updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while updating ! Please try again",
    });
  }
};

module.exports = {
  fetchListOfBlogs,
  addNewBlog,
  deleteABlog,
  updateABlog,
};
