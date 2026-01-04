import classes from "./ProjectCard.module.scss";
import { H1 } from "../..//components/Headings";
import ashtangaImage from "../../assets/ashtanga_project.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
  return (
    <article className={classes.project_card}>
      <div className={classes.card_info}>
        <H1 className={classes.heading}>Ashtanga Project</H1>
        <p className={classes.card_para}>
          This project showcases my love of ashtanga yoga, stylish UI and
          responsive design.
        </p>
        <div className={classes.card_links}>
          <a
            href="https://github.com/LJ-Fryer/ashtanga-project"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://ashtanga-yoga.netlify.app/" target="_blank">
            <FontAwesomeIcon icon={faRocket} />
          </a>
        </div>
      </div>
      <div className={classes.card_image}>
        <img src={ashtangaImage} alt="Ashtanga Project" />
      </div>
    </article>
  );
};

export default ProjectCard;
