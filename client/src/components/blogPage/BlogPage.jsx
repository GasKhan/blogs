import classes from './blogPage.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPage = () => {
  const blogs = useSelector((store) => store.blogs);

  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === +id);

  return (
    <div className={classes.blog}>
      <div className={classes.container}>
        <h3 className={classes.title}>{blog.title}</h3>
        <p className={classes.text}>{blog.body}</p>
      </div>
    </div>
  );
};

export default BlogPage;
