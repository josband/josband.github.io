import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import ThemeToggle from "./ThemeToggle";
import Hamburger from "./Hamburger";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <header className="primary-header">
      <Hamburger />

      <div className="logo">
        <Logo />
      </div>

      <nav>
        <ul id="primary-navigation" className="primary-navigation">
          <li title="Home">
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/"
              onClick={() => closeNav()}
            >
              Home
            </NavLink>
          </li>
          <li title="Projects">
            <NavLink
              className={({ isActive }) => (isActive ? "text-gradient" : "")}
              to="/projects"
              onClick={() => closeNav()}
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
              onClick={() => closeNav()}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>

      <ThemeToggle />
    </header>
  );
};

const closeNav = () => {
  const hamburger: HTMLElement | null =
    document.getElementById("hamburger-button");
  if (!hamburger) return;
  hamburger.click();
};

export default NavBar;
