import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

interface Props {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<Props> = ({ darkTheme, setDarkTheme }: Props) => {
  // TODO: Refactor so dark theme hooks are in this component

  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={darkTheme ? faMoon : faSun}
        onClick={() => setDarkTheme(!darkTheme)}
      />
    </nav>
  );
};

export default NavBar;
