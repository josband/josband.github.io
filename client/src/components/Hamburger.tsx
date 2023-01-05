import { ReactComponent as Icon } from "../assets/hamburger.svg";
import "./Hamburger.css";

const Hamburger = () => {
  const buttonClick = () => {
    const button: HTMLElement | null =
      document.getElementById("hamburger-button");
    if (!button) return;

    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <button
      id="hamburger-button"
      aria-controls="primary-navigation"
      aria-expanded="false"
      onClick={buttonClick}
    >
      <Icon />
    </button>
  );
};

export default Hamburger;
