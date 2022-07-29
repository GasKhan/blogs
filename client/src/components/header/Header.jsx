import { Link } from 'react-router-dom';
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <Link to="/" className={classes.blogsLink}>
          Blogs
        </Link>
        <Link to="/about" className={classes.aboutLink}>
          About
        </Link>
        <Link to="/blogForm" className={classes.formLink}>
          New blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
