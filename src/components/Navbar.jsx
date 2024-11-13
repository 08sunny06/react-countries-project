import { CiDark } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-8 shadow">
        <h1 className="font-bold">Where in the world?</h1>
        <div className="flex text-sm">
            <CiDark className="my-1 mx-1"/>
            <p>Dark Mode</p>
        </div>
    </div>
  );
};

export default Navbar;