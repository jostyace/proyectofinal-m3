import { useState, useEffect } from 'react';

const useCitySearch = (query) => {
  const [cities, setCities] = useState([]);


  useEffect(() => {
    const obtenerCiudades = async () => {
      if (query && query !== ''){
      try {
        const response = await fetch(`http://api.geonames.org/searchJSON?formatted=true&q=${query}&maxRows=5&lang=es&username=jostyace&cities=cities1000`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCities(data);
        
      } catch (error) {
        console.log('Ocurrio uh error')
      }
    }
    };

    if (query) {
      obtenerCiudades();
    }
  }, [query]);

  return { cities };
};

export default useCitySearch;
