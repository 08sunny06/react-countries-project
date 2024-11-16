import Navbar from "../components/Navbar";
import  CountriesComp  from "../components/CountriesComp";

const HomePage = ({isDark}) => {
  return (
    <>      
      <CountriesComp isDark={isDark} />
    </>
  );
};

export default HomePage;
