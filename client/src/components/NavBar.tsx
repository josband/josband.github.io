import { NavLink } from "react-router-dom";
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
    <header className="primary-header">
      <div className="logo">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </div>

      <nav>
        <ul id="primary-navigation" className="primary-navigation">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/teaching"
            >
              Teaching
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="theme-toggle">
        <FontAwesomeIcon
          icon={darkTheme ? faMoon : faSun}
          onClick={() => setDarkTheme(!darkTheme)}
        />
      </div>
    </header>
  );
};

export default NavBar;
