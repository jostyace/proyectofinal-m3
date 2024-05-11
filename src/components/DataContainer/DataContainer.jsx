import { Buttons } from "../Buttons/Buttons";
import { ExtraData } from "../ExtraData/ExtraData";
import { WeatherCard } from "../WeatherCard/WeatherCard";

export const DataContainer = ({
  weather,
  wind,
  temp,
  meassure,
  setMeassure,
  proximosDias,
}) => {
  return (
    <div className="w-full min-h-screen xl:px-24 h-full md:absolute md:right-0 lg:px-18  sm:!h-full lg:w-4/6  md:w-7/12 text-textoClaro bg-oscuro py-0 px-10 sm:px-46  sm:pb-12 sm:pt-8">
      <div className="flex w-full gap-3 justify-end">
        <Buttons
          tipo={`${
            meassure === "C"
              ? "bg-white rounded-full w-[40px] flex justify-center items-center p-0 !text-oscuro !font-semibold sm:flex hidden "
              : "rounded-full w-[40px] font-semibold !bg-textoOscuro sm:flex hidden justify-center items-center p-0"
          }`}
          texto="°C"
          onClick={() => setMeassure("C")}
          meassure={meassure}
        />
        <Buttons
          tipo={`${
            meassure === "F"
              ? "bg-white rounded-full w-[40px] flex justify-center items-center p-0 !text-oscuro !font-semibold sm:flex hidden "
              : "rounded-full w-[40px]  font-semibold !bg-textoOscuro  sm:flex hidden justify-center items-center p-0"
          }`}
          texto="°F"
          onClick={() => setMeassure("F")}
          meassure={meassure}
        />
      </div>
      <div className=" flex flex-wrap justify-between lg:justify-between lg:py-7 py-10  lg:gap-2 gap-6">
        {proximosDias &&
          proximosDias.length > 0 &&
          proximosDias.map((dia, index) => {
            const dias = new Date(dia.dt * 1000);
            const diaSemana = dias.toLocaleDateString("en-US", {weekday: "short"});
            const mes = dias.toLocaleDateString("en-US", { month: "short" });
            const diaMes = dias.getDate();
            const fechaFormateada = `${diaSemana}, ${diaMes} ${mes}`;

            return (
              <WeatherCard
                key={index}
                fecha={index === 0 ? 'Tomorrow' : fechaFormateada}
                temp={dia.main}
                minTemp={dia.main.temp_min}
                maxTemp={dia.main.temp_max}
                icon={dia.weather[0].icon}
                meassure={meassure}
              />
            );
          })}
      </div>
      <div className="w-full">
        <h1 className=" text-2xl !pb-8 font-semibold">Today's Highlights</h1>
        <div className="flex relative pb-20 justify-between w-full gap-9 lg:gap-6 flex-wrap">
          <ExtraData
            numero={wind && parseInt(wind.speed)}
            medida="mph"
            titulo="Wind status"
            tipo="wind"
            rotate={wind && wind.deg}
          />
          <ExtraData
            numero={temp && parseInt(temp.humidity)}
            medida="%"
            titulo="Humidity"
            tipo="humidity"
          />
          <ExtraData
            numero={weather && (weather.visibility / 1609.34).toFixed(1)}
            medida="miles"
            titulo="Visibility"
            tipo="otro"
          />
          <ExtraData
            numero={temp && parseInt(temp.pressure)}
            medida="mb"
            titulo="Air Pressure"
            tipo="otro"
          />
          <div className="w-full absolute bottom-0 bg-transparent text-center pb-3">
            Creado por Joseph
          </div>
        </div>
      </div>
    </div>
  );
};
