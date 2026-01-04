import classes from "./Projects.module.scss";
import { H1 } from "../Headings";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className={classes.projects} id="projects">
      <H1 className={classes.heading}>Projects</H1>
      <ProjectCard />
    </div>
  );
};

export default Projects;
