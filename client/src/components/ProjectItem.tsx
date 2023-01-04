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
      <div className="overlay">
        <img
          src={`${process.env.PUBLIC_URL}/assets/${image}`}
          alt={`${title} Demo`}
          className="project-image"
        />
        <div className="project-description">
          <p>{description}</p>
        </div>
      </div>

      <div className="project-details">
        <p>Technology: {tech}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
