import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import { useState } from 'react';
import CountryDetails from './components/CountryDetails';
import MainLayout from './Layout/MainLayout';
import { createContext } from 'react';

export const themeContext = createContext({})

const App = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <themeContext.Provider value={{isDark, setIsDark}} >
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={`/countryDetails/:id`} element={<CountryDetails />} />
        </Route>
      </Routes>
    </Router>
    </themeContext.Provider>
  );

};

export default App;
