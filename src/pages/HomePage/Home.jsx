import { useState } from "react";
import SearchBar from "../../components/Search/SearchBar.jsx";
import CountryInfo from "../../components/Countries/CountryInfo.jsx";
import WeatherInfo from "../../components/Weather/WeatherInfo.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [weatherCoords, setWeatherCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preLoad, setPreLoad] = useState(true);

  const handleSearch = (filteredCountries) => {
    setLoading(true);
    setPreLoad(false);
    setCountries(filteredCountries);

    if (
      filteredCountries.length > 0 &&
      filteredCountries[0].latlng.length === 2
    ) {
      setWeatherCoords({
        lat: filteredCountries[0].latlng[0],
        lng: filteredCountries[0].latlng[1],
      });
    } else {
      setWeatherCoords(null);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-between p-1">
        <h1 className="ml-2">Weathers & Countries</h1>
        <div className="m-2">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {preLoad && (
        <>
          <div className="titleDisc">
            <h4>
              <span>Explore and discover comprehensive insights</span>
              <br />
              <span>on countries and their weather conditions!</span>
            </h4>
          </div>
          <div className="flex justify-center items-center">
            <Carousel />
          </div>
        </>
      )}
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {countries.length > 0 && <CountryInfo countries={countries} />}
            {weatherCoords && (
              <WeatherInfo
                latitude={weatherCoords.lat}
                longitude={weatherCoords.lng}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
