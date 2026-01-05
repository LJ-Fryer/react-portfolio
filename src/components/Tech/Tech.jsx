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
} from "@fortawesome/free-brands-svg-icons";

const Tech = () => {
  return (
    <article className={classes.tech} id="tech">
      <H2 className={classes.heading}>Skills...</H2>
      <div className={classes.skills_list}>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faHtml5} />
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faCss3} />
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faJs} />
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faSass} />
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faReact} />
        </span>
        <span className={classes.skill}>
          <FontAwesomeIcon icon={faGitAlt} />
        </span>
      </div>
    </article>
  );
};

export default Tech;
