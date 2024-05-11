import "./App.css";
import { DataContainer } from "./components/DataContainer/DataContainer";
import { MainScreen } from "./components/MainScreen/MainScreen";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Search } from "./components/Search/Search";
import { useEffect, useState } from "react";
import useWeather from "./hooks/getWeather";
import useIpLocation from "./hooks/getIPLocation";
import useWeatherForecast from "./hooks/useWeatherDays";

function App() {
  const [searchModal, setSearchModal] = useState(false);
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [actualWind, setActualWind] = useState([]);
  const [actualTemp, setActualTemp] = useState([]);
  const [actualWeather, setActualWeather] = useState([]);
  const [actualInfo, setActualInfo] = useState([]);
  const [meassure, setMeassure] = useState("C");
  const [proximosDias, setProximosDias] = useState([]);
  const [lastThreeCities, setLastThreeCities] = useState([]);
  const { location } = useIpLocation();
  const { data } = useWeather(latitud, longitud);
  const { forecastData } = useWeatherForecast(latitud, longitud);
  const today = new Date();

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem('lastThreeCities')) || [];
    setLastThreeCities(storedCities);
  }, []);

  useEffect(() => {
    if (data) {
      setActualWeather(data);
      setActualWind(data.wind);
      setActualTemp(data.main);
      setActualInfo(data.weather[0]);
    }
  }, [latitud, longitud, data]);

  useEffect(() => {
    if (forecastData) {
      const dates = forecastData.list;
      const allData = [];
      for (let i = 7; i < dates.length; i += 8) {
        allData.push(dates[i]);
      }
      setProximosDias(allData);
    }
  }, [forecastData]);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setLatitud(location.latitude);
      setLongitud(location.longitude);
    }
  }, [location]);

  return (
    <div className="flex flex-wrap sm:relative h-full sm:h-full">
      {searchModal && (
        <Search
          setSearchModal={setSearchModal}
          setLatitud={setLatitud}
          setLongitud={setLongitud}
          lastThreeCities={lastThreeCities}
          setLastThreeCities={setLastThreeCities}
        />
      )}

      {!searchModal && (
        <MainScreen
          setSearchModal={setSearchModal}
          setLatitud={setLatitud}
          setLongitud={setLongitud}
          weather={actualWeather}
          temp={actualTemp}
          info={actualInfo}
          meassure={meassure}
          date={today}
        />
      )}

      <DataContainer
        weather={actualWeather}
        wind={actualWind}
        temp={actualTemp}
        meassure={meassure}
        setMeassure={setMeassure}
        proximosDias={proximosDias}
      />
    </div>
  );
}

export default App;
