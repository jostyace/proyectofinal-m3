import { useState, useEffect } from "react";
const OW_API = process.env.OW_API;

const useWeatherForecast = (latitude, longitude) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      if (latitude && latitude !== "" && longitude && longitude !== "") {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${OW_API}&units=metric`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setForecastData(data);
        } catch (error) {
          console.log('Ocurrio un errr')
        }
      }
    };

    fetchWeatherForecast();

    return () => {};
  }, [latitude, longitude]);

  return { forecastData };
};

export default useWeatherForecast;
