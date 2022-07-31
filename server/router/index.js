const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogsController');

router.get('/blogs', blogController.getAllBlogs);

router.delete('/blogs/:id', blogController.deleteOneBlog);

router.post('/blogs', blogController.createBlog);

module.exports = router;
