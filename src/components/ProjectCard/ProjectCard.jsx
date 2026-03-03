import classes from "./ProjectCard.module.scss";
import { H3, P } from "../..//components/Headings";
// import ashtangaImage from "../../assets/ashtanga_project.jpg";
import gbImage from "../../assets/gb_project.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import netlifyIcon from "../../assets/netlify-logo-lightmode.png"
// import { faRocket } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
  return (
    <article className={classes.project_card}>
      <div className={classes.project_box}>
        <div className={classes.heading}>
          <H3 className={classes.heading}>Google Books API Project</H3>
        </div>
        <div className={classes.outer}>
          <div className={`${classes.inner} ${classes.inner_text}`}>
            <P className={classes.para}>A responsive book‑search app showcasing clean UI, API integration, and scalable React component architecture.
            </P>
            <div className={classes.card_links}>
              <a href="https://github.com/LJ-Fryer/book-search" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://ljf-portfolio-2026.netlify.app/" target="_blank">
                <img src={netlifyIcon} alt="Hosted on Netlify" className={classes.netlify}/>
              </a>
            </div>
          </div>
          <div className={classes.inner}>
            <img src={gbImage} alt="Google Books API" />
          </div>
        </div>        
      </div>
    </article>
  );
};

export default ProjectCard;
