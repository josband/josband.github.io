import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import "./ProjectItem.css";

interface Props {
  title: string;
  link: string;
  image: string;
  tech: string;
  description: string;
}

const ProjectItem = ({ title, link, image, tech, description }: Props) => {
  return (
    <div className="project-container">
      <a className="project-title" href={link} target="_blank" rel="noreferrer">
        {title} <FontAwesomeIcon icon={faChain} />
      </a>

      <img
        src={`${process.env.PUBLIC_URL}/assets/${image}`}
        alt={`${title} Demo`}
        className="project-image"
      />
      <div className="project-details">
        <p>Tech: {tech}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
