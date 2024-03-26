import { useState } from "react";
import SearchBar from "../../components/Searchbar/SearchBar";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import WeatherInfo from "../../components/weather/WeatherInfo";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [weatherCoords, setWeatherCoords] = useState(null); // State for weather coordinates

  const handleSearch = (filteredCountries) => {
    setCountries(filteredCountries);
    // Extract coordinates from the first country in the list for weather info
    if (
      filteredCountries.length > 0 &&
      filteredCountries[0].latlng.length === 2
    ) {
      setWeatherCoords({
        lat: filteredCountries[0].latlng[0],
        lng: filteredCountries[0].latlng[1],
      });
    } else {
      setWeatherCoords(null); // Reset if no valid coordinates are found
    }
  };

  return (
    <div className="">
      <div className="flex justify-between p-1">
        <h2 className="">Weathers & Countries</h2>
        <div className="m-2">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="titleDisc">
        <h4>
          <span>Explore and discover comprehensive insights</span>
          <br />
          <span>on countries and their weather conditions.</span>
        </h4>
      </div>
      <div>
        {/* Country Information */}
        {countries.length > 0 && <CountryInfo countries={countries} />}
        {/* Weather Information */}
        {weatherCoords && (
          <WeatherInfo
            latitude={weatherCoords.lat}
            longitude={weatherCoords.lng}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
