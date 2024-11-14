import { CiDark } from "react-icons/ci";

const Navbar = ({ isDark, setIsDark }) => {
  return (
    <div
      className={`flex justify-between py-4 px-8 shadow ${isDark ? "bg-[#2b3945]" : "bg-white"} ${isDark ? "text-white" : "text-black"}`}>
      <h1 className={`font-bold `}>Where in the world?</h1>
      <div className={`flex text-sm `} onClick={() => setIsDark((prev) => !prev)} >
        <CiDark className="my-1 mx-1" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;

const num = 3;
const str = `the number is ${num}`;
const styl1 = "dark";
const styl2 = "light";
