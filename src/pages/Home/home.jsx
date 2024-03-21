// Home.jsx
import { useState } from "react";
import SearchBar from "../../components/Searchbar/SearchBar";
import CountryInfo from "../../components/CountryInfo/CountryInfo";

const Home = () => {
  const [countries, setCountries] = useState([]);

  const handleSearch = (filteredCountries) => {
    setCountries(filteredCountries);
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-white text-4xl">Weathers & Countries</h2>
        <div className="mt-3">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>
          <CountryInfo countries={countries} />
        </div>
      </div>
    </div>
  );
};

export default Home;
