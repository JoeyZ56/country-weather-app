// SearchBar.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const fetchCountries = async (searchQuery) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchQuery}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log({ error: "Error failed to find countries" });
    }
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      setSearchClicked(true);
      fetchCountries(search).then((data) => {
        onSearch(data);
      });
    }
  };

  const handleReset = () => {
    setSearch("");
    setSearchClicked(false);
    onSearch([]);
  };

  //Props validation
  SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded-md mt-2"
      />
      <button onClick={handleSearch}>Search</button>
      {searchClicked && <button onClick={handleReset}> Reset</button>}
    </div>
  );
};

export default SearchBar;
