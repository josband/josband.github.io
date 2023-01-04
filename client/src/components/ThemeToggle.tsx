import { useEffect, useState } from "react";
import { ReactComponent as Spinner } from "../assets/theme-spinner.svg";
import { getCookie } from "../util/Cookie";
import { enableDarkTheme, enableLightTheme } from "../util/DarkTheme";
import "./ThemeToggle.css";

const ThemeToggle = () => {
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
    <button
      id="theme-toggle"
      aria-label="Toggle Theme"
      onClick={() => setDarkTheme(!darkTheme)}
    >
      <Spinner />
    </button>
  );
};

export default ThemeToggle;
