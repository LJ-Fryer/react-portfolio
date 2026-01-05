import classes from "./Projects.module.scss";
import { H2 } from "../Headings";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className={classes.projects} id="projects">
      <H2 className={classes.heading}>Projects</H2>
      <ProjectCard />
    </div>
  );
};

export default Projects;
