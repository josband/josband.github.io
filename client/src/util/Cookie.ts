export function getCookie(key: string): string {
  // Get the cookies and check if any exist, if not return the empty string
  const allCookies: string = document.cookie;
  if (allCookies === "") return "";

  // Now split the cookies and check for the expected key
  const cookies: string[] = allCookies.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookiePair = cookies[i].split("=");
    if (key === cookiePair[0].trim()) return decodeURIComponent(cookiePair[1]);
  }

  // Cookie with that key was not found
  return "";
}

// Editing and Creating a new cookie is the same thing
export function setCookie(
  key: string = "",
  value: string = "",
  days: number = 1
): void {
  // Check for bad input
  if (key === "" || value === "")
    throw new Error("Illegal Argument for the key or value");

  // Compute expiration date
  let date: Date = new Date();
  date.setTime(new Date().getTime() + days * 24 * 60 * 60 * 1000);

  // Encode the value, create the cookie, and save it
  value = encodeURIComponent(value);
  const cookie: string = `${key}=${value};expires=${date.toUTCString()};Secure`;
  console.log(cookie);
  document.cookie = cookie;
}
