import { useState, useEffect } from 'react';

const useWeather = (latitud, longitud) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=a9e44b3b02d3b162ebd4784eb98960ca&units=metric `;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data fetch failed');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setData(null);
        console.log('Hubo un eror')
      }
    };

    if (latitud && longitud) {
      fetchData();
    }
  }, [latitud, longitud]);

  return { data };
};

export default useWeather;
