import { GoSearch } from "react-icons/go";

const SearchBar = ({ setRegion, setSearch, isDark }) => {
  let changeRegion = (e) => setRegion(e.target.value);
  let searchData = (e) => setSearch(e.target.value);

  return (
    <div className={`flex justify-between px-10 py-14 ${isDark ? 'bg-[#202c37]': 'bg-customGray'}`}>
      <div className={` shadow py-2 ${isDark ? 'bg-[#2b3945]': 'bg-white'}`}>
        <GoSearch className="inline mx-8" />
        <input
          type="text"
          placeholder="Search for a country"
          className={`cursor-pointer ${isDark ? 'bg-[#2b3945]': 'bg-white'} ${isDark ? 'text-black': 'text-white'}`}
          onChange={searchData}
        />
      </div>
      <select
        onClick={changeRegion}
        name="region"
        id="region"
        className={`py-2 px-8 shadow ${isDark ? 'bg-[#2b3945]': 'bg-white'} ${isDark ? 'text-white': 'text-black'}`}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchBar;
