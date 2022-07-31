const Blog = require('../models/models');

class BlogController {
  async createBlog(req, res) {
    try {
      const { title, body } = req.body;

      const blog = await Blog.create({ title, body });
      res.json(req.body);
    } catch (e) {
      console.log(e);
    }
  }

  async getAllBlogs(req, res) {
    try {
      const blogs = await Blog.findAll();
      res.json(blogs);
    } catch (e) {
      console.log(e);
    }
  }

  // async getOneBlog(req, res) {
  //   try {
  //     const { id } = req.params;

  //     const blog = await Blog.findOne({
  //       where: { id },
  //     });

  //     res.json(blog);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async deleteOneBlog(req, res) {
    try {
      const { id } = req.params;

      const blog = await Blog.destroy({
        where: { id },
      });

      res.json(blog);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new BlogController();
