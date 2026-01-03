import classes from "./Hero.module.scss";
import heroImage from "../../assets/trapeze.png";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.hero_box}>
        <h2 className={`${classes.flip} ${classes.title}`}>Hi!</h2>
        <h2 className={`${classes.title} ${classes.name}`}>I'm Linda.</h2>

        <p className={classes.subtitle}>Sydney based junior developer</p>
      </div>
      <div className={classes.hero_box}>
        <img
          src={heroImage}
          alt="Flying high on a trapeze"
          className={classes.hero_image}
        />
      </div>
    </div>
  );
};

export default Hero;
