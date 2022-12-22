import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Teaching from "./pages/Teaching";
import Resume from "./pages/Resume";
import SharedLayout from "./pages/SharedLayout";
import "./App.css";

const App: React.FC = () => {
  // Todo: Add cookie to track what theme you prefer
  const [darkTheme, setDarkTheme] = useState<boolean>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // This will also run on mount so no worries!
  useEffect(() => {
    darkTheme
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  }, [darkTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }
        >
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        {/* Now the 404 page can have a different layout and force users back to the home page  */}
        <Route path="*" element={<h1>Error:404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
