import { GoSearch } from "react-icons/go";
import { themeContext } from "../App";
import { useContext } from "react";

const SearchBar = ({ setSearch, setRegion, subRegionData, setSubRegion, setSorting }) => {
  let searchData = (e) => setSearch(e.target.value);
  let changeRegion = (e) => setRegion(e.target.value);
  let changeSubRegion = (e) => setSubRegion(e.target.value)
  let sortingFunction = (e) => setSorting(e.target.value)
  
  const {isDark} = useContext(themeContext)

  return (
    <div className={`flex sm:searchBarDesktop searchBarMobile ${isDark ? 'bg-[#202c37]': 'bg-customGray'}`}>
      <div className={` shadow py-2 ${isDark ? 'bg-[#2b3945]': 'bg-white'}`}>
        <GoSearch className="inline mx-8" />
        <input
          type="text"
          placeholder="Search for a country"
          className={`cursor-pointer ${isDark ? 'bg-[#2b3945]': 'bg-white'} ${isDark ? 'text-white': 'text-black'}`}
          onChange={searchData}
        />
      </div>
      <div>
        <select 
          onClick={changeRegion}
          name="region"
          id="region"
          className={`sm:filterDesktop filterMobile mx-8 ${isDark ? 'bg-[#2b3945]': 'bg-white'} ${isDark ? 'text-white': 'text-black'}`}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select
          onClick={changeSubRegion}
          name="subRegion"
          id="subRegion"
          className={`sm:filterSubRegion filterMobile ${isDark ? 'bg-[#2b3945]': 'bg-white'} ${isDark ? 'text-white': 'text-black'}`}
        >
          <option value="">Filter by SubRegion</option>
          {subRegionData.map(item => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <select 
          onClick={sortingFunction}
          name="sorting"
          id="sorting"
          className={`sm:sorting filterMobile mx-8 ${isDark ? 'bg-[#2b3945]': 'bg-white'} ${isDark ? 'text-white': 'text-black'}`}
        >
          <option value="">Sorting</option>
          <option value="populationAscen">Sorting of Population in Ascending Order</option>
          <option value="populationDescen">Sorting of Population in Descending Order</option>
          <option value="areaAscen">Sorting of Area in Ascending Order</option>
          <option value="areaDescen">Sorting of Area in Descending Order</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
