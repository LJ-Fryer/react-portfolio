import { useState } from "react";
import classes from "./Navbar.module.scss";
import logo from "../../assets/ljf_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faToolbox,
  faFolder,
  faCircleInfo,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_left}>
        <a href="/">
          <img src={logo} alt="LJF logo" />
        </a>
      </div>

      <div className={classes.navbar_box}>
        <a href="/" aria-label="Home">
          <FontAwesomeIcon icon={faHouse} className={classes.navbar_icon} />
        </a>
        <a href="#tech" aria-label="Tech stack">
          <FontAwesomeIcon icon={faToolbox} className={classes.navbar_icon} />
        </a>
        <a href="#projects" aria-label="Projects">
          <FontAwesomeIcon icon={faFolder} className={classes.navbar_icon} />
        </a>
        <a href="#about" aria-label="About me">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className={classes.navbar_icon}
          />
        </a>
        <a href="#contact" aria-label="Contact me">
          <FontAwesomeIcon icon={faComment} className={classes.navbar_icon} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
{
  /* <MenuIcon />; */
}
{
  /* <div className={classes.navbar_toggle}>
  <button
    className={`${classes.toggle_icon} ${classes.close}`}
    aria-label="Open Navigation Menu"
    onClick={() => {
      setIsExpanded(!isExpanded);
    }}
  ></button>
</div>; */
}
