import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";

const CountryDetails = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        if (!response.ok) {
          throw new Error("Country not found");
        }
        const data = await response.json();
        setCountry(data[0]);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [countryName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      {/* Back Button with navigate(-1) to go back to the previous page */}
      <button 
        className="flex w-1/7 py-2 px-7 mx-16 my-16 shadow-md rounded-md items-center"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong />
        <h1 className="mx-4 mr-0">Back</h1>
      </button>
      {country && (
        <div className="flex justify-center items-center my-8">
          <div className="w-2/5">
            <img
              className="block"
              src={country.flags?.svg || ""}
              alt={country.flags?.alt || "Flag"}
            />
          </div>
          <div className="w-1/3 mx-16">
            <h1 className="my-8 font-black text-4xl">{country.name?.common}</h1>
            <div className="flex justify-between">
              <div>
                <p className="py-1">Native Name: {country.name?.common}</p>
                <p className="py-1">Population: {country.population}</p>
                <p className="py-1">Region: {country.region}</p>
                <p className="py-1">Sub Region: {country.subregion}</p>
                <p className="py-1">Capitals: {country.capital?.join(", ")}</p>
              </div>
              <div>
                <p className="py-1">Top Level Domain: {country.tld?.join(", ")}</p>
                <p className="py-1">
                  Currencies: {country.currencies ? Object.values(country.currencies).map((c) => c.name).join(", ") : "N/A"}
                </p>
                <p className="py-1">
                  Languages: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
