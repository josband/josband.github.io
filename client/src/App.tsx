import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Teaching from "./pages/Teaching";
import Resume from "./pages/Resume";
import SharedLayout from "./pages/SharedLayout";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
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
