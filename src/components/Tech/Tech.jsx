import classes from "./Tech.module.scss";
import { H2 } from "../Headings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faReact,
  faGitAlt,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

const Tech = () => {
  return (
    <article className={classes.tech} id="tech">
      <H2 className={classes.heading}>Skills...</H2>
      <div className={classes.skills_list}>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faHtml5} aria-label="HTML"/>
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faCss3} aria-label="CSS"/>
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faJs} aria-label="JavaScript"/>
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faSass} aria-label="Sass SCSS"/>
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faReact} aria-label="React"/>
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faGitAlt} aria-label="Git"/>
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faJava} aria-label="Java"/>
        </span>
      </div>
    </article>
  );
};

export default Tech;
