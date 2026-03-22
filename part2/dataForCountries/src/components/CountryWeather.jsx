import { useEffect, useState } from "react";
import axios from "axios";

const CountryWeather = ({apiKey, capital}) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
        .then(response => response.data)
        .then(weatherData => {
            console.log("Fetched weather data:", weatherData);
            setWeatherData(weatherData);
        })
        .catch(error => console.error("Error fetching weather data:", error));
    }, [capital, apiKey]);

  return (
    <div>
      <h2>Weather in {capital || 'Unknown'}</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main?.temp}°C</p>
          <img src = {`https://openweathermap.org/payload/api/media/file/${weatherData.weather[0]?.icon}@2x.png`} alt="Weather icon" />
          <p>Wind: {weatherData.wind?.speed} m/s</p>
        </div>
      )}

    </div>
  );
};

export default CountryWeather;