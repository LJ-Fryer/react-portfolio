import classes from "./Contact.module.scss";
import { H3, P } from "../Headings/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className={classes.contact} id="contact">
      <H3>Get in touch</H3>
      <div className={classes.contact_box}>
        <a
          href="https://github.com/LJ-Fryer"
          target="_blank"
          className={classes.icon}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/linda-fryer-ba2294ba/"
          target="_blank"
          className={classes.icon}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:codingyogi7@gmail.com" className={classes.icon}>
          <P>codingyogi7@gmail.com</P>
        </a>
      </div>
    </div>
  );
};

export default Contact;
