import { useState } from "react";
import classes from "./Navbar.module.scss";
import logo from "../../assets/ljf_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import FolderIcon from "@mui/icons-material/Folder";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_left}>
        <a href="/">
          <img src={logo} alt="LJF logo" />
        </a>
      </div>

      <div className={classes.navbar_icons}>
        <a href="/" aria-label="Home">
          <HomeIcon />
        </a>
        <a href="#about" aria-label="About me">
          <InfoIcon />
        </a>
        <a href="#tech" aria-label="Tech stack">
          <HomeRepairServiceIcon />
        </a>
        <a href="#projects" aria-label="Projects">
          <FolderIcon />
        </a>
        <div className={classes.navbar_toggle}>
          <button
            className={`${classes.toggle_icon} ${classes.close}`}
            aria-label="Open Navigation Menu"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
{
  /* <MenuIcon />; */
}
