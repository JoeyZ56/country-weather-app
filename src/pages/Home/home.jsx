import SearchBar from "../../components/Searchbar/searchBar";
import CountryInfo from "../../components/CountryInfo/CountryInfo";

const home = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col ">
        <h2 className="text-white text-4xl">Weathers & Countries</h2>
        <div className="mt-3">
          <SearchBar />
        </div>
        <div>
          <CountryInfo />
        </div>
      </div>
    </div>
  );
};

export default home;
