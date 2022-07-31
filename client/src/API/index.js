import axios from 'axios';

export const createBlog = async (title, body) => {
  const blog = await axios.post('http://localhost:3000/api/blogs', {
    title,
    body,
  });
  return blog;
};

export const deleteBlog = async (id) => {
  await axios.delete(`http://localhost:3000/api/blogs/${id}`);
  return { id };
};

export const fetchBlogs = async () => {
  const blogs = await axios.get('http://localhost:3000/api/blogs');
  return blogs;
};
