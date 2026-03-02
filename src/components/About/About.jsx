import classes from "./About.module.scss";
// import trapezeImage from "../../assets/trapeze.png";
import luckyImage from "../../assets/lucky.jpeg";
import { H2, P } from "../Headings/index.jsx";

const About = () => {
  return (
    <div className={classes.about} id="about">
      <H2>About me...</H2>
      <div className={classes.wrapper}>
        <div className={`${classes.box} ${classes.para}`}>
          <P>
            With a background as a teacher, I bring strong communication and
            problem‑solving skills to tech. A lifelong science enthusiast and
            puzzle solver, I thrive on analytical challenges. Currently training
            with _Nology, I’m building the skills to craft responsive,
            user‑friendly web experiences with creativity and precision.
          </P>
        </div>
        <div className={classes.box}>
          <img src={luckyImage} alt="A selfie" />
        </div>
      </div>
    </div>
  );
};

export default About;
