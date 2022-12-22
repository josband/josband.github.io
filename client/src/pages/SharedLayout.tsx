import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface Props {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const SharedLayout: React.FC<Props> = ({ darkTheme, setDarkTheme }: Props) => {
  return (
    <>
      <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main id="content-wrap">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
