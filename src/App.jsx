import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import FilterPage from "./pages/FilterPage";
import CountryDetails from './components/CountryDetails';


const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/details' element={<CountryDetails />} /> */}
          <Route path='/country/:countryName' element={<CountryDetails/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
