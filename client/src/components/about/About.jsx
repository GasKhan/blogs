import classes from './about.module.css';

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.container}>
        <h1 className={classes.title}>About</h1>
        <p className={classes.text}>Welcome to our site</p>
      </div>
    </div>
  );
};

export default About;
