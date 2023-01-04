import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./SharedLayout.css";

const SharedLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <main id="content-wrap">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
