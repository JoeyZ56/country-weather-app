import { useState } from "react";

useState;

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => alert(search)}
        className="bg-red-500 w-[100px] h-[30px] flex justify-center items-center text-white rounded-md mt-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
