import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Country from "./Country";
import { themeContext } from "../App";
import { useContext } from "react";

const CountriesComp = () => {
  let [countries, setCountry] = useState([]);
  let [search, setSearch] = useState("");
  let [region, setRegion] = useState("");
  let [subRegion, setSubRegion] = useState("");
  let [sorting, setSorting] = useState("")
  const { isDark } = useContext(themeContext)

  console.log(sorting)

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

  let subRegionData = [];
  countries
    .map((cou) => cou.subregion)
    .filter(
      (item) => subRegionData.indexOf(item) == -1 && subRegionData.push(item)
    );
  subRegionData.shift();

  const filteredCountries = countries.filter((country) => {
    const isInSearch =
      search === "" ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    const isInRegion =
      region === "" || country.region.toLowerCase() === region.toLowerCase();
    const isInSubRegion =
      subRegion === "" ||
      country.subregion && country.subregion.toLowerCase() === subRegion.toLowerCase();
    return isInSearch && isInRegion && isInSubRegion;
  });

  sorting!=="" && filteredCountries.sort((a,b) => (
    sorting=="populationAscen" ? (a.population-b.population) :
    sorting=="populationDescen" ? (b.population-a.population) :
    sorting=="areaAscen" ? (a.area-b.area) : (b.area-a.area)
  ))

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        setRegion={setRegion}
        setSubRegion={setSubRegion}
        subRegionData={subRegionData}
        setSorting={setSorting}
        isDark={isDark}
      />
      <div
        className={`sm:countryTabsDesktop ${
          isDark ? "bg-[#202c37]" : "bg-customGray"
        }`}
      >
        {filteredCountries.map((country) => (
          <Country country={country} key={country.cca3} isDark={isDark} />
        ))}
      </div>
    </>
  );
};

export default CountriesComp;
