import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import classes from './blogs.module.css';
import { fetchBlogs } from '../../API/index';
import fetchBlogsThunk from '../../redux/fetchBlogsThunk';

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
                  <button className={classes.blogDelete}>delete</button>
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
