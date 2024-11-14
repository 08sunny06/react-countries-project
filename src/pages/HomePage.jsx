import Navbar from "../components/Navbar";
import  CountriesComp  from "../components/CountriesComp";

const HomePage = ({isDark, setIsDark}) => {
  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <CountriesComp isDark={isDark} />
    </>
  );
};

export default HomePage;
