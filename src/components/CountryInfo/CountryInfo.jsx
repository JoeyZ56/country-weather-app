import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import WeatherInfo from "../weather/WeatherInfo";

const CountryInfo = ({ countries }) => {
  return (
    <div className="p-1">
      <div>
        <h2 className="text-white text-2xl">Country Info:</h2>
      </div>
      <div className="text-white">
        {countries.map((country, index) => (
          <div key={index} className="mt-5">
            <h2 className="text-2xl">{country.name?.common}</h2>
            <h3>Official Name: {country.name?.official ?? "N/A"}</h3>
            <p>Native Name: {country.name?.nativeName?.common ?? "N/A"}</p>
            <p>
              ISO Codes: {country.cca2 ?? "N/A"}, {country.cca3 ?? "N/A"},{" "}
              {country.ccn3 ?? "N/A"}
            </p>
            <p>CIOC Code: {country.cioc ?? "N/A"}</p>
            <p>Independence: {country.independent ? "Yes" : "No"}</p>
            <p>UN Member: {country.unMember ? "Yes" : "No"}</p>
            {country.currencies && (
              <p>
                Currencies:{" "}
                {Object.values(country.currencies).map((curr, index) => (
                  <span key={index}>
                    {curr.name} ({curr.symbol})
                    {index < Object.values(country.currencies).length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
              </p>
            )}

            <p>
              IDD Prefix: {country.idd?.root}
              {country.idd?.suffixes.join(", ") ?? "N/A"}
            </p>
            <p>Capital: {country.capital ?? "N/A"}</p>
            <p>
              Alternate Spellings: {country.altSpellings?.join(", ") ?? "N/A"}
            </p>
            <p>Region: {country.region ?? "N/A"}</p>
            <p>Subregion: {country.subregion ?? "N/A"}</p>
            {country.languages && Array.isArray(country.languages) && (
              <p>Languages: {Object.values(country.languages).join(", ")}</p>
            )}

            <p>
              Translations: {country.translations?.eng?.join(", ") ?? "N/A"}
            </p>
            <p>
              Geographical Coordinates: {country.latlng?.join(", ") ?? "N/A"}
            </p>
            <p>Landlocked: {country.landlocked ? "Yes" : "No"}</p>
            <p>Area: {country.area ?? "N/A"} sq.km</p>
            {country.demonyms && Array.isArray(country.demonyms.eng) && (
              <p>Demonyms: {Object.values(country.demonyms.eng).join(" / ")}</p>
            )}

            <p>
              Flag:{" "}
              <img
                src={country.flags?.svg}
                alt={country.name?.common}
                className="w-[300px] h-[200px]"
              />
            </p>
            <p>Population: {country.population ?? "N/A"}</p>
            <p>Gini Coefficient (2018): {country.gini?.["2018"] ?? "N/A"}</p>
            <p>FIFA Code: {country.fifa ?? "N/A"}</p>
            <p>Driving Side: {country.car?.side ?? "N/A"}</p>
            <p>Timezones: {country.timezones?.join(", ") ?? "N/A"}</p>
            <p>Continents: {country.continents?.join(", ") ?? "N/A"}</p>
            <p>
              Google Maps:{" "}
              <a
                href={country.maps?.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                {country.maps?.googleMaps ?? "N/A"}
              </a>
            </p>
            <p>
              OpenStreetMaps:{" "}
              <a
                href={country.maps?.openStreetMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                {country.maps?.openStreetMaps ?? "N/A"}
              </a>
            </p>
            <p>
              Coat of Arms:{" "}
              <img
                src={country.coatOfArms?.svg}
                alt={`${country.name?.common} Coat of Arms`}
                className="w-[300px] h-[200px]"
              />
            </p>
            <p>First Day of the Week: {country.startOfWeek ?? "N/A"}</p>
            <p>Postal Code Format: {country.postalCode?.format ?? "N/A"}</p>
            <p>Postal Code Regex: {country.postalCode?.regex ?? "N/A"}</p>
          </div>
        ))}
      </div>
      <div>{/* <WeatherInfo /> */}</div>
    </div>
  );
};

CountryInfo.propTypes = {
  countries: PropTypes.array.isRequired, // Correct the prop type to expect an array
};

function CountriesErrorBoundary(props) {
  return (
    <ErrorBoundary
      errorComponent={
        <div>
          <h2 className="felx justify-center items-center mt-[6rem] text-white text-2xl">
            Oops... this countries info can not be retrieved at the moment.
          </h2>
          <Link to="/" className=" flex justify-center mt-2 text-purple-400">
            Refresh
          </Link>
        </div>
      }
    >
      <CountryInfo {...props} />
    </ErrorBoundary>
  );
}

export default CountriesErrorBoundary;
