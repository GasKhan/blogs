import axios from 'axios';

export const createBlog = async (title, body) => {
  console.log('fetching');
  const blog = await axios.post('http://localhost:3000/api/blogs', {
    title,
    body,
  });
  return blog;
};
