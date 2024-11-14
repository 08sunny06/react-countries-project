import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Borders from "./Borders";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

const CountryDetails = ({isDark}) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [country, setNewCountry] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
      const json = await data.json();
      setNewCountry(json);
    };
    fetchdata();
  }, [id]);

  return (
    <div className={`${isDark ? "bg-[#202c39]" : "bg-white"} ${isDark ? "text-white" : "text-black"} h-screen`}>
      <Navbar isDark={isDark} />
      <button
        className={`flex w-1/7 py-2 px-7 mx-16 my-16 shadow-md rounded-md items-center ${isDark ? "bg-[#2b3945]" : "bg-white"} ${isDark ? "text-white" : "text-black"}`}
        onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong />
        <h1 className="mx-4 mr-0">Back</h1>
      </button>

      <div className={`flex justify-center items-center my-8 `}>
        <div className="w-2/5">
          {Object.keys(country).length > 0 ? (
            <img
              className="block"
              src={country[0].flags.svg}
              alt={country[0].flags.alt}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className={`w-1/3 mx-16 `}>
          {Object.keys(country).length > 0 ? (
            <h1 className="my-8 font-black text-4xl">
              {country[0].name.common}
            </h1>
          ) : (
            <p>Loading..0</p>
          )}
          <div className="flex justify-between">
            <div>
              {Object.keys(country).length > 0 ? (
                <p className="py-1">
                  <span className="font-bold">Native Name:</span>{" "}
                  {country[0].name.common}
                </p>
              ) : (
                <p>Loading...</p>
              )}
              {Object.keys(country).length > 0 ? (
                <p className="py-1">
                  <span className="font-bold">Population:</span>{" "}
                  {country[0].population}
                </p>
              ) : (
                <p>Loading...</p>
              )}
              {Object.keys(country).length > 0 ? (
                <p className="py-1">
                  <span className="font-bold">Region:</span> {country[0].region}
                </p>
              ) : (
                <p>Loading...</p>
              )}
              {Object.keys(country).length > 0 ? (
                <p className="py-1">
                  <span className="font-bold">Sub Region:</span>{" "}
                  {country[0].subregion}
                </p>
              ) : (
                <p>Loading...</p>
              )}
              {Object.keys(country).length > 0 ? (
                <p className="py-1">
                  <span className="font-bold">Capitals:</span>{" "}
                  {country[0].capital}
                </p>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div>
              {Object.keys(country).length > 0 ? (
                <p className="py-1">
                  <span className="font-bold">Top Level Domain:</span>{" "}
                  {country[0].tld}
                </p>
              ) : (
                <p>Loading...</p>
              )}
              {Object.keys(country).length > 0 ? (
                <p className="py-1">
                  <span className="font-bold">Currencies:</span>{" "}
                  {Object.values(country[0].currencies)[0].symbol}
                </p>
              ) : (
                <p>Loading...</p>
              )}
              {Object.keys(country).length > 0 ? (
                <p className="py-1">
                  <span className="font-bold">Languages:</span>{" "}
                  {Object.values(country[0].languages).join(" ")}
                </p>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div>
            {Object.keys(country).length > 0 ? (
              <p className="py-4 my-4">
                <span className="font-bold text-md">Border Countries:</span>{" "}
                {country[0].borders ? (
                  <Borders isDark={isDark} borders={country[0].borders} />
                ) : (
                  <span>None</span>
                )}
              </p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
