import classes from "./ProjectCard.module.scss";
import { H3, P } from "../..//components/Headings";
// import ashtangaImage from "../../assets/ashtanga_project.jpg";
import gbImage from "../../assets/gb_project.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
  return (
    <article className={classes.project_card}>
      <div className={classes.info_box}>
        <H3 className={classes.heading}>Google Books API Project</H3>
        <P className={classes.card_para}>
          A responsive book‑search app showcasing clean UI, API integration, and
          scalable React component architecture.
        </P>
        <div className={classes.card_links}>
          <a href="https://github.com/LJ-Fryer/book-search" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className={classes.image_box}>
        <img src={gbImage} alt="Ashtanga Project" />
      </div>
    </article>
  );
};

export default ProjectCard;
