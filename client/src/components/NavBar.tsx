import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import ThemeToggle from "./ThemeToggle";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <header className="primary-header">
      <div className="logo">
        <Logo />
        {/* <NavLink
          className={({ isActive }) => (isActive ? "text-gradient" : "")}
          to="/"
        >
          <i className="fa-solid fa-house"></i>
        </NavLink> */}
      </div>

      <nav>
        <ul id="primary-navigation" className="primary-navigation">
          <li title="Home">
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li title="Projects">
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/teaching"
            >
              Teaching
            </NavLink>
          </li> */}
          <li title="Resume">
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>

      <ThemeToggle />
      {/* <div className="theme-toggle" title="Toggle Theme">
        <FontAwesomeIcon
          icon={darkTheme ? faMoon : faSun}
          onClick={() => setDarkTheme(!darkTheme)}
        />
      </div> */}
    </header>
  );
};

export default NavBar;
