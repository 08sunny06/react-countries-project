import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Country from "./Country";

const CountriesComp = () => {
  let [countries, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  let [region, setRegion] = useState("");
  let [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.log("Error Occured: " + error);
      }
    };
    fetchCountry();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const isInSearch =
      search === "" ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    const isInRegion =
      region === "" || country.region.toLowerCase() === region.toLowerCase();
    return isInSearch && isInRegion;
  });

  return (
    <>
      <SearchBar setRegion={setRegion} setSearch={setSearch} />
      <div className="grid grid-cols-4 bg-customGray" >
        {filteredCountries.map((country) => (
          <Country country={country} key={country.cca3} />
        ))}
      </div>
    </>
  );
};

export default CountriesComp ;
