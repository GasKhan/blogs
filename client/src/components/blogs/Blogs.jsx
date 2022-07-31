import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import classes from './blogs.module.css';
import fetchBlogsThunk from '../../redux/fetchBlogsThunk';
import deleteBlogThunk from '../../redux/deleteBlogThunk';

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsThunk());
  }, []);

  return (
    <div className={classes.blogsWrapper}>
      <h1 className={classes.title}>Blogs</h1>
      <div className={classes.blogs}>
        <ul className={classes.blogsList}>
          {blogs.map((blog) => {
            return (
              <li key={blog.id} className={classes.blog}>
                <h4 className={classes.blogTitle}>{blog.title}</h4>
                <div className={classes.blogController}>
                  <Link to={`/blog/${blog.id}`}>open</Link>
                  <button
                    className={classes.blogDelete}
                    onClick={() => dispatch(deleteBlogThunk(blog.id))}
                  >
                    delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
