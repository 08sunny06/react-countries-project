import { MdOutlineDarkMode } from "react-icons/md";
import { themeContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(themeContext)

  return (
    <div
      className={`flex justify-between py-6 px-8 shadow ${isDark ? "bg-[#2b3945]" : "bg-white"} ${isDark ? "text-white" : "text-black"}`}>
      <h1 className={`font-bold `}>Where in the world?</h1>
      <div className={`flex text-sm cursor-pointer `} onClick={() => setIsDark((prev) => !prev)} >
        <MdOutlineDarkMode className={`my-1 mx-1 `} />
        {isDark ? <p>Dark Mode</p>: <p>LightMode</p> }
      </div>
    </div>
  );
};

export default Navbar;

