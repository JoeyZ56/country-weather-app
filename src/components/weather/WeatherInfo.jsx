import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
        );
        const data = await res.json();
        setWeatherData(data.hourly); // Setting only the hourly data for simplicity
      } catch (error) {
        console.log({ error: "Error failed to find weather" });
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="text-white">
      <h2>Weather Info</h2>
      {weatherData &&
        weatherData.time.map((time, index) => (
          <div key={index}>
            <p>Time: {time}</p>
            <p>Temperature: {weatherData.temperature_2m[index]}°C</p>
            <p>Time Zone: {weatherData.timezone}</p>
            <p>Elevation: {weatherData.elevation}</p>
          </div>
        ))}
    </div>
  );
};

WeatherInfo.propTypes = {
  weatherData: PropTypes.shape({
    time: PropTypes.array.isRequired,
    temperature_2m: PropTypes.array.isRequired,
    timezone: PropTypes.string.isRequired,
    elevation: PropTypes.number.isRequired,
  }),
};

export default WeatherInfo;
