import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './blogForm.module.css';
import { createBlog } from '../../API/index';

const BlogForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function changeHandler(e) {
    setTitle(e.target.value);
  }

  function inputHandler(e) {
    setBody(e.target.value);
  }

  function addNewBlog(e) {
    e.preventDefault();

    if ((title.trim(), body.trim())) {
      createBlog(title, body);

      setTitle('');
      setBody('');

      navigate('/');
    }
  }

  return (
    <div className={classes.blogForm}>
      <div className={classes.container}>
        <h2 className={classes.title}>Create new blog</h2>
        <form className={classes.form} onSubmit={(e) => addNewBlog(e)}>
          <input
            className={classes.input}
            placeholder="Title"
            value={title}
            onChange={(e) => changeHandler(e)}
          />
          <textarea
            className={classes.textarea}
            onInput={(e) => inputHandler(e)}
            value={body}
          ></textarea>
          <button className={classes.btn}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
