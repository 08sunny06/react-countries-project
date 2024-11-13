import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Country = ({ country }) => {
  const navigate = useNavigate()

  const changeCountry = () => {
    navigate(`/country/${country.name.common}`)
  }

  return (
    <div className="mx-10 my-10 shadow rounded-lg bg-white" onClick={changeCountry} >
      <img
        className="w-96 h-60 object-cover rounded-t-lg"
        src={country.flags.svg}
        alt={country.flags.alt}
      />
      <h1 className="my-6 mx-6 text-2xl font-bold">{country.name.common}</h1>
      <p className="mx-6 my-2">Population: {country.population}</p>
      <p className="mx-6 my-2">Region: {country.region}</p>
      {country.capital && (
        <p className="mx-6 my-2 mb-16">Capital: {country.capital}</p>
      )}
    </div>
  );
};

export default Country;
