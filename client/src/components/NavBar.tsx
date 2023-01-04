import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { enableDarkTheme, enableLightTheme } from "../util/DarkTheme";
import { getCookie } from "../util/Cookie";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./NavBar.css";

const NavBar: React.FC = () => {
  // Refer to this for why called twice: https://stackoverflow.com/questions/62106596/reactjs-setstate-being-called-twice-in-a-function-called-once-why
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    // Check if cookie does not exist, if not, check what the user's preferred theme is
    const cookieVal = getCookie("theme");

    // Use prefered theme if not cookie exists
    if (cookieVal === "")
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );

    // If cookie does exist, return whether the cookie value is equal to dark or not
    return cookieVal === "dark";
  });

  // Runs on the mounting of the component
  useEffect(() => {
    darkTheme ? enableDarkTheme() : enableLightTheme();
  }, [darkTheme]);

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

      <div className="theme-toggle" title="Toggle Theme">
        <FontAwesomeIcon
          icon={darkTheme ? faMoon : faSun}
          onClick={() => setDarkTheme(!darkTheme)}
        />
      </div>
    </header>
  );
};

export default NavBar;
