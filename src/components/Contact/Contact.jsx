import classes from "./Contact.module.scss";
import { H3, P } from "../Headings/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className={classes.contact} id="contact">
      <H3>Get in touch</H3>
      <div className={classes.contact_box}>
        <a
          href="https://github.com/LJ-Fryer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className={classes.icon}/>
        </a>
        <a
          href="https://www.linkedin.com/in/linda-fryer-ba2294ba/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin}  className={classes.icon}/>
        </a>
        <a href="mailto:codingyogi7@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope}  className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
