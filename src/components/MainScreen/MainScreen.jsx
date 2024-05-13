import { Buttons } from "../Buttons/Buttons";

export const MainScreen = ({
  setSearchModal,
  setLatitud,
  setLongitud,
  weather,
  temp,
  info,
  meassure,
  date,
}) => {
  const dia = date.toLocaleDateString("en-US", { weekday: "short" });
  const mes = date.toLocaleDateString("en-US", { month: "short" });
  const diaMes = date.getDate();
  const hoy = `${dia}, ${diaMes} ${mes}`;

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("No se logró obtener la ubicacon");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitud(position.coords.latitude);
        setLongitud(position.coords.longitude);
      },
      (error) => {
        console.error("Error al intentar obtener la ubicacion", error);
      }
    );
  };
  const datos = weather;

  return (
    <div className="w-full md:fixed lg:w-2/6  md:w-5/12 font-raleway h-screen bg-normal text-textoMedio ">
      <div
        id="iconsContainer"
        className="w-full  h-[10vh] flex px-10 pt-8 justify-between "
      >
        <Buttons
          tipo="w-auto rounded-sm px-6  py-2"
          texto="Search for places"
          onClick={() => setSearchModal(true)}
        />
        <Buttons
          tipo="rounded-full w-[40px] flex justify-center items-center p-0"
          texto={null}
          onClick={handleGetLocation}
          icon={(options) => (
            <svg
              className="w-[24px]"
              viewBox="0 0 171 171"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#e7e7eb"
                stroke="#e7e7eb"
                strokeWidth="0.09375"
                opacity="1.00"
                d=" M 84.47 13.54 C 87.70 10.62 93.38 12.03 94.94 16.06 C 95.92 19.18 95.39 22.53 95.53 25.76 C 110.30 27.41 124.35 34.69 134.09 45.93 C 142.24 55.10 147.31 66.85 148.76 79.00 C 152.77 79.26 157.75 77.90 160.82 81.25 C 164.11 84.57 162.35 90.82 157.91 92.13 C 154.89 92.60 151.81 92.35 148.76 92.39 C 147.12 107.09 139.94 121.07 128.82 130.84 C 119.61 139.11 107.77 144.27 95.50 145.75 C 95.38 149.08 96.00 152.60 94.79 155.79 C 93.02 159.69 87.35 160.73 84.27 157.78 C 80.95 154.66 82.29 149.72 81.93 145.69 C 66.92 144.05 52.74 136.47 42.96 124.99 C 35.07 115.87 30.17 104.32 28.72 92.37 C 25.54 92.28 22.26 92.74 19.14 91.97 C 14.85 90.37 13.57 84.12 16.95 81.00 C 20.11 77.96 24.84 79.24 28.77 79.00 C 30.47 63.89 38.06 49.54 49.71 39.77 C 58.77 32.02 70.18 27.15 82.00 25.75 C 82.29 21.69 80.83 16.49 84.47 13.54 M 82.18 39.24 C 74.06 40.38 66.26 43.70 59.81 48.77 C 48.74 57.28 41.98 71.04 41.86 84.99 C 41.57 96.46 45.85 107.90 53.35 116.55 C 61.90 126.53 74.86 132.57 88.01 132.65 C 102.72 133.07 117.41 125.90 126.19 114.11 C 133.82 104.21 137.10 91.15 135.21 78.81 C 133.38 65.74 125.64 53.62 114.54 46.49 C 105.13 40.21 93.37 37.61 82.18 39.24 Z"
              />
              <path
                fill="#e7e7eb"
                stroke="#e7e7eb"
                strokeWidth="0.09375"
                opacity="1.00"
                d=" M 84.20 59.29 C 93.00 57.68 102.42 60.93 108.48 67.47 C 116.86 76.33 117.98 90.99 110.88 100.95 C 104.06 111.28 89.68 115.41 78.35 110.49 C 67.99 106.31 61.11 95.08 62.01 83.95 C 62.52 71.87 72.29 61.15 84.20 59.29 Z"
              />
            </svg>
          )}
        />
      </div>
      <div
        id="imageWeatherContainer"
        className="bg-fondo h-[40vh] xl:bg-contain flex justify-center items-center bg-center bg-cover  bg-no-repeat"
      >
        <img className="w-[80%] z-[-99]" src={`/weather/${info.icon}.svg`} />
      </div>

      <div
        id="textWeatherContainer"
        className="h-[50vh] justify-between pb-32 sm:pb-10 flex flex-col items-center "
      >
        <div className="flex flex-row justify-center items-center">
          <h1 className=" text-[9rem] leading-[169.06px] text-white font-medium">
            {temp.temp && meassure === "C"
              ? parseInt(temp.temp)
              : parseInt(temp.temp * 1.8 + 32) || 0}
          </h1>
          <span className="font-medium text-5xl">°{meassure[0]}</span>
        </div>
        <p className="  font-medium text-4xl  capitalize ">
          {info.description || "Climate"}
        </p>
        <div className="flex text-center flex-col justify-center gap-3">
          <p>Today · {hoy}</p>
          <span className="flex justify-center gap-2">
            <svg
              className="w-[24px]"
              viewBox="0 0 163 181"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#88869d"
                stroke="#88869d"
                strokeWidth="0.09375"
                opacity="1.00"
                d=" M 69.20 12.20 C 81.71 10.05 95.01 12.49 105.80 19.25 C 119.59 27.69 128.93 42.91 130.18 59.04 C 131.27 71.09 127.49 82.92 122.81 93.86 C 113.29 115.05 99.79 134.16 85.25 152.17 C 83.41 154.73 80.40 156.96 77.07 156.21 C 74.22 155.78 72.34 153.43 70.68 151.30 C 55.71 132.61 41.67 112.80 32.39 90.60 C 27.00 77.69 24.02 63.03 28.14 49.31 C 33.29 30.44 49.92 15.45 69.20 12.20 M 73.38 45.59 C 68.22 47.00 63.73 50.71 61.48 55.58 C 58.09 62.49 59.67 71.48 65.25 76.79 C 70.05 81.58 77.56 83.40 84.00 81.24 C 92.87 78.59 98.64 68.67 96.51 59.63 C 94.54 49.49 83.31 42.60 73.38 45.59 Z"
              />
            </svg>
            {datos.name || "City"}
          </span>
        </div>
      </div>
    </div>
  );
};
