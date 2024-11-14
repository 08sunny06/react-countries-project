import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Borders = ({ borders, isDark }) => {
  const [country, setCountry] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const jsn = await data.json();
      setCountry(jsn);
    };
    fetchData();
  }, []);

  const borderCountry = [];
  country.map((item) => {
    borders.forEach((element) => {
      if (item.cca3 == element) borderCountry.push(item);
    });
  });

  return (
    <>
      {borderCountry.map((item) => (
        <span key={item.cca3}>
          {" "}
          <button
            className={`w-1/7 py-2 px-7 mx-2 my-2 shadow-md rounded-md items-center ${isDark ? "bg-[#2b3945]" : "bg-white"} ${isDark ? "text-white" : "text-black"}`}
            onClick={() => navigate(`/countryDetails/${item.cca3}`)}
          >
            {item.name.common}
          </button>{" "}
        </span>
      ))}
    </>
  );
};

export default Borders;
