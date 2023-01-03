import ProjectItem from "../components/ProjectItem";
import "./Projects.css";
import Data from "../assets/projects.json";

// Will store project details temporarily in a json file but afterwards will
// update to be stored in a MongoDB database

const Projects: React.FC = () => {
  document.title = "Jonah Osband | Projects";

  return (
    <div className="projects-container">
      {Data.map((project, index: number) => (
        <ProjectItem
          key={index}
          title={project.title}
          link={project.link}
          image={project.image}
          tech={project.tech}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Projects;
