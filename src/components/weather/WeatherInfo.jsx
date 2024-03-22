import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const WeatherInfo = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!latitude || !longitude) return;

      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data.current);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  return (
    <>
      <div>
        <h2 className="mt-4">Weather Info</h2>
        {weatherData && (
          <div className="flex-container">
            <section>
              <img
                className="w-[58px] h-[58px] mr-2"
                src={weatherData.condition.icon}
                alt="Weather Icon"
              />
              <p>
                Temperature: {weatherData.temp_c}°C ({weatherData.temp_f}°F)
              </p>
              <p>
                Feels Like: {weatherData.feelslike_c}°C (
                {weatherData.feelslike_f}
                °F)
              </p>
              <p>Cloud: {weatherData.cloud}%</p>
              <p>
                Wind: {weatherData.wind_kph} kph ({weatherData.wind_mph} mph)
                from {weatherData.wind_dir}
              </p>
            </section>
            <section>
              <p>Condition: {weatherData.condition.text}</p>
              <p>Humidity: {weatherData.humidity}%</p>
              <p>Visibility: {weatherData.vis_km} km</p>
              <p>Pressure: {weatherData.pressure_mb} mb</p>

              <p>UV Index: {weatherData.uv}</p>
              <p>Last Updated: {weatherData.last_updated}</p>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

WeatherInfo.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default WeatherInfo;
