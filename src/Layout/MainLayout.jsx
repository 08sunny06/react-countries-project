import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({isDark, setIsDark}) => {
  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
    </>
  );
};

export default MainLayout;
