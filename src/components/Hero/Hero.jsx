import classes from "./Hero.module.scss";
import heroImage from "../../assets/trapeze.png";
import { H1, P } from "../Headings/index";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.hero_box}>
        <H1 className={`${classes.flip}`}>Hi!</H1>
        <H1 className={` ${classes.name}`}>I'm Linda.</H1>
        <P className={classes.subtitle}>Sydney based junior developer</P>
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
