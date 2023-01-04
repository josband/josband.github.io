import { setCookie } from "./Cookie";

export function enableDarkTheme() {
  // TODO: If there is not a cookie set the expiration date for 2 weeks, otherwise enter the default
  let days = 7;

  // Set the cookie and the theme
  setCookie("theme", "dark", days);
  document.body.classList.add("dark-theme");
}

export function enableLightTheme() {
  // TODO: If there is not a cookie set the expiration date for 2 weeks, otherwise enter the default
  let days = 7;

  // Set the cookie and the theme
  setCookie("theme", "light", days);
  document.body.classList.remove("dark-theme");
}
