import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import { useState } from 'react';
import CountryDetails from './components/CountryDetails';


const App = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage isDark={isDark} setIsDark={setIsDark} />} />
        <Route path={`/countryDetails/:id`} element={<CountryDetails isDark={isDark} />} />
      </Routes>
    </Router>
  );

};

export default App;
