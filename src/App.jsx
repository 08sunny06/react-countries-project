import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import { useState } from 'react';
import CountryDetails from './components/CountryDetails';
import MainLayout from './Layout/MainLayout';


const App = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout isDark={isDark} setIsDark={setIsDark} />}>
          <Route index element={<HomePage isDark={isDark} />} />
          <Route path={`/countryDetails/:id`} element={<CountryDetails isDark={isDark} />} />
        </Route>
      </Routes>
    </Router>
  );

};

export default App;
