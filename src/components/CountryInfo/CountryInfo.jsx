import { useState, useEffect } from "react";

const CountryInfo = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const res = await fetch(" https://restcountries.com/v3.1/all");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error, { error: "Error fetching countries" });
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      const countriesFromServer = await fetchCountries();
      setCountries(countriesFromServer);
    };
    getCountries();
  }, []);

  return (
    <div>
      <div>
        <h2>Country Info</h2>
      </div>
      <div className="text-white flex justify-center items-center flex-col ">
        {countries.map((country, index) => (
          <div key={index} className="mt-5">
            <h2>{country.name.common}</h2>
            <p>Official Name: {country.name.official}</p>
            {country.capital ? (
              <p>
                Capital:{" "}
                {Array.isArray(country.capital)
                  ? country.capital[0]
                  : country.capital}
              </p>
            ) : null}
            <p>Population: {country.population}</p>
            <a href="/moreInfo">
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-[500px] h-[400px]"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryInfo;
