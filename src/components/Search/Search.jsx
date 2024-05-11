import { SearchInput } from "../SearchInput/SearchInput"
import useCitySearch from '../../hooks/useCitySearch';
import { useEffect, useState } from 'react';

export const Search = ({ setSearchModal, setLatitud, setLongitud, setLastThreeCities, lastThreeCities }) => {

  const [cityQuery, setCityQuery] = useState('');
  const [query, setQuery] = useState('')
  const { cities } = useCitySearch(cityQuery);
  const [foundCities, setFoundCities] = useState([]);

  useEffect(() => {
    if (cities) {
      setFoundCities(cities.geonames);
    }
  }, [cities]);

  function handleCityClick(city) {
    
    const updatedCities = [city, ...lastThreeCities.slice(0, 2)];
    setLastThreeCities(updatedCities);
    localStorage.setItem('lastThreeCities', JSON.stringify(updatedCities));
    setLatitud(city.lat)
    setLongitud(city.lng)
    setSearchModal(false)
  }

  return (
    <div className="w-full fixed md:w-2/6 font-raleway h-screen bg-normal text-textoMedio ">
      <div onClick={() => setSearchModal(false)} className="w-auto absolute right-6 top-6 cursor-pointer  h-auto flex-col justify-between " >
        <svg className="fill-white stroke-white w-8 h-8" viewBox="0 0 101 104" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path strokeWidth="0.09375" opacity="1.00" d=" M 21.93 27.86 C 18.74 23.67 24.97 17.63 29.01 21.01 C 37.70 29.36 46.05 38.06 54.66 46.50 C 62.97 38.18 71.23 29.82 79.61 21.58 C 82.45 18.58 88.34 20.78 88.17 24.99 C 88.39 27.24 86.74 28.87 85.26 30.28 C 77.40 38.03 69.67 45.90 61.81 53.65 C 69.87 61.78 77.99 69.85 86.09 77.94 C 87.24 79.05 88.29 80.39 88.23 82.08 C 88.60 86.18 83.03 88.83 80.03 86.11 C 71.55 77.74 63.16 69.29 54.75 60.85 C 47.16 68.22 39.76 75.78 32.27 83.25 C 30.48 84.90 28.84 87.48 26.05 87.21 C 21.85 87.24 19.39 81.44 22.59 78.58 C 30.84 70.21 39.23 61.96 47.50 53.61 C 39.00 45.01 30.24 36.64 21.93 27.86 Z" />
        </svg>
      </div>
      <div className="w-full h-auto flex-col px-12 pt-20  justify-between ">
        <SearchInput
          setQuery={setQuery}
          query={query}
          setCityQuery={setCityQuery}
          foundCities={foundCities}
        />
        <div className="relative flex">
          <ul className="w-full pt-6">
            {!foundCities && lastThreeCities.map((city, index) => (
              <li key={index} onClick={() => handleCityClick(city)} className="group bg-transparent hover:border border border-normal hover:cursor-pointer hover:border-textoSearch mb-6 h-16 flex items-center px-4">
                <div className="flex w-full items-center h-full justify-between">
                  <span className="h-full flex items-center textoSearch group-hover:text-textoClaro">{city.name}, {city.countryName}</span> <span className="hidden group-hover:block">
                    <svg className="fill-textoSearch stroke-textoSearch h-4" viewBox="0 0 104 131" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path strokeWidth="0.09375" opacity="1.00" d=" M 32.36 35.97 C 31.76 31.31 36.28 26.89 40.92 27.65 C 43.93 27.74 45.81 30.35 47.80 32.25 C 57.93 42.44 68.08 52.60 78.28 62.73 C 80.27 64.78 82.92 66.84 83.00 69.97 C 83.34 72.71 81.68 75.05 79.81 76.84 C 68.07 88.43 56.52 100.22 44.75 111.79 C 40.59 115.73 32.87 112.54 32.43 106.91 C 31.93 104.28 33.14 101.72 35.02 99.94 C 44.87 90.18 54.62 80.32 64.47 70.56 C 55.56 61.47 46.49 52.53 37.49 43.52 C 35.41 41.33 32.44 39.30 32.36 35.97 Z" />
                    </svg>
                  </span>
                </div>
              </li>
            ))}

            {foundCities && foundCities.map((city, index) => (
              <li key={index} onClick={() => handleCityClick(city)} className="group bg-transparent hover:border border border-normal hover:cursor-pointer hover:border-textoSearch mb-6 h-16 flex items-center px-4">
                <div className="flex w-full items-center h-full justify-between">
                  <span className="h-full flex items-center textoSearch group-hover:text-textoClaro">{city.name}, {city.countryName}</span> <span className="hidden group-hover:block">
                    <svg className="fill-textoSearch stroke-textoSearch h-4" viewBox="0 0 104 131" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path strokeWidth="0.09375" opacity="1.00" d=" M 32.36 35.97 C 31.76 31.31 36.28 26.89 40.92 27.65 C 43.93 27.74 45.81 30.35 47.80 32.25 C 57.93 42.44 68.08 52.60 78.28 62.73 C 80.27 64.78 82.92 66.84 83.00 69.97 C 83.34 72.71 81.68 75.05 79.81 76.84 C 68.07 88.43 56.52 100.22 44.75 111.79 C 40.59 115.73 32.87 112.54 32.43 106.91 C 31.93 104.28 33.14 101.72 35.02 99.94 C 44.87 90.18 54.62 80.32 64.47 70.56 C 55.56 61.47 46.49 52.53 37.49 43.52 C 35.41 41.33 32.44 39.30 32.36 35.97 Z" />
                    </svg>
                  </span>
                </div>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
      <div className="h-[50vh] justify-between pb-32 sm:pb-10 flex flex-col items-center ">

      </div>
    </div>
  )
}
