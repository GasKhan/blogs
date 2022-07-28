import { useEffect, useState } from 'react';
import classes from './blogs.module.css';
import { fetchBlogs } from '../../API/index';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className={classes.blogsWrapper}>
      <h1 className={classes.title}>Blogs</h1>
      <div className={classes.blogs}>
        <ul className={classes.blogsList}>
          {blogs.map((blog) => {
            return (
              <li key={blog.id} className={classes.blog}>
                {blog.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
