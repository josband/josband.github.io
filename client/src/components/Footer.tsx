import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="primary-footer">
      <span className="text-gradient">Connect With Me:</span>
      <ul className="primary-social">
        <li>
          <a
            href="https://www.linkedin.com/in/jonah-osband/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/josband" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:jro44@pitt.edu" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
