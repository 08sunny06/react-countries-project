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
  let [sorting, setSorting] = useState("");
  let [currency, setCurrency] = useState("")
  const { isDark } = useContext(themeContext);

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
    .map((cou) =>
      region !== "" ? cou.region == region && cou.subregion : cou.subRegion
    )
    .filter(
      (item) => subRegionData.indexOf(item) == -1 && subRegionData.push(item)
    );
  subRegionData.shift();

  let currencyData = [];
  countries.filter(
    (item) => item.region == region && item.subregion == subRegion && item
  ).map((item) => Object.values(item.currencies).map((item) => item.name))
  .filter((curen) =>
    curen.length == 1
      ? currencyData.indexOf(curen.join("")) == -1 &&
        currencyData.push(curen.join(""))
      : curen.filter(
          (curItem) =>
            currencyData.indexOf(curItem) == -1 && currencyData.push(curItem)
        )
  );

  const filteredCountries = countries.filter((country) => {
    // country.currencies && console.log(Object.values(country.currencies).map(item=>item.name))
    const isInSearch =
      search === "" ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    const isInRegion =
      region === "" || country.region.toLowerCase() === region.toLowerCase();
    const isInSubRegion =
      subRegion === "" ||
      (country.subregion &&
        country.subregion.toLowerCase() === subRegion.toLowerCase());
    const isCurrency = 
      currency === "" ||
      (country.currencies && Object.values(country.currencies).map(item=>item.name).indexOf(currency)>-1)
    return isInSearch && isInRegion && isInSubRegion && isCurrency;
  });

  sorting !== "" &&
    filteredCountries.sort((a, b) =>
      sorting == "populationAscen"
        ? a.population - b.population
        : sorting == "populationDescen"
        ? b.population - a.population
        : sorting == "areaAscen"
        ? a.area - b.area
        : b.area - a.area
    );

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        setRegion={setRegion}
        setSubRegion={setSubRegion}
        subRegionData={subRegionData}
        currencyData={currencyData}
        setSorting={setSorting}
        setCurrency={setCurrency}
        isDark={isDark}
        region={region}
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
