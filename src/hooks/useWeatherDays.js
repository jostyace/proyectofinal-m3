import { useState, useEffect } from "react";

const useWeatherForecast = (latitude, longitude) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      if (latitude && latitude !== "" && longitude && longitude !== "") {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=a9e44b3b02d3b162ebd4784eb98960ca&units=metric`
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
