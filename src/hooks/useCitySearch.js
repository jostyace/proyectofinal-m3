import { useState, useEffect } from 'react';
const GEO_USER = process.env.GEO_USER;


const useCitySearch = (query) => {
  const [cities, setCities] = useState([]);


  useEffect(() => {
    const obtenerCiudades = async () => {
      if (query && query !== ''){
      try {
        const response = await fetch(`https://secure.geonames.org/searchJSON?formatted=true&q=${query}&maxRows=5&lang=es&username=${GEO_USER}&cities=cities1000`);
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
