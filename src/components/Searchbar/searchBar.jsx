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
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 w-[100px] h-[30px] flex justify-center items-center text-white rounded-md mt-2"
      >
        Search
      </button>
      {searchClicked && (
        <button
          onClick={() => {
            setSearch("");
            setSearchClicked(false);
          }}
          className="bg-gray-500 w-[100px] h-[30px] flex justify-center items-center text-white rounded-md mt-2"
        >
          {" "}
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchBar;
