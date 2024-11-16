import React from "react";
import {useNavigate}from 'react-router-dom'
import { themeContext } from "../App";
import { useContext } from "react";

const Country = ({ country }) => {
  const navigate = useNavigate()
  const {isDark} = useContext(themeContext)

  return (
    <div className={`sm:countryDesktop my-0 mx-24 shadow rounded-lg cursor-pointer ${isDark ? 'bg-[#2b3945]': 'bg-white'} ${isDark ? 'text-white': 'text-black'}`} onClick={() => navigate(`/countryDetails/${country.cca3}`)} >
      <img
        className="w-96 h-60 object-cover rounded-t-lg"
        src={country.flags.svg}
        alt={country.flags.alt}
      />
      <h1 className="my-6 mx-6 text-2xl font-bold">{country.name.common}</h1>
      <p className="mx-6 my-2">Population: {country.population}</p>
      <p className="mx-6 my-2">Region: {country.region}</p>
      {country.capital && (
        <p className="mx-6 my-2 sm:cardsCountryBorder mb-20 pb-12 ">Capital: {country.capital}</p>
      )}
    </div>
  );
};

export default Country;
