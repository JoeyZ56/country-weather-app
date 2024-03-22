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
    <div className="">
      <div className="flex justify-between p-1">
        <h2 className="text-white text-4xl">Weathers & Countries</h2>
        <div className="m-2">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="">
        <CountryInfo countries={countries} />
      </div>
    </div>
  );
};

export default Home;
