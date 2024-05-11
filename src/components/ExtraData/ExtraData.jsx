export const ExtraData = ({ numero, medida, titulo, tipo, rotate }) => {
  function encontrarDireccionViento(rotate) {
    const degs = [
      { deg: 11.25, direccion: "N" },
      { deg: 33.75, direccion: "NNE" },
      { deg: 56.25, direccion: "NE" },
      { deg: 78.75, direccion: "ENE" },
      { deg: 101.25, direccion: "E" },
      { deg: 123.75, direccion: "ESE" },
      { deg: 146.25, direccion: "SE" },
      { deg: 168.75, direccion: "SSE" },
      { deg: 191.25, direccion: "S" },
      { deg: 213.75, direccion: "SSW" },
      { deg: 236.25, direccion: "SW" },
      { deg: 258.75, direccion: "WSW" },
      { deg: 281.25, direccion: "W" },
      { deg: 303.75, direccion: "WNW" },
      { deg: 326.25, direccion: "NW" },
      { deg: 348.75, direccion: "NNW" },
    ];

    let direccionViento = "N";
    for (const { deg, direccion } of degs) {
      if (deg > rotate) {
        return direccionViento;
      }
      direccionViento = direccion;
    }
    return direccionViento;
  }
  const direccionViento = encontrarDireccionViento(rotate);

  return (
    <div
      className={`font-raleway w-full flex justify-center items-center  xl:min-h-[180] lg:min-h-[45px] lg:h-[140px] lg:w-[48%] lg:min-w-[48%] flex-col left-0 min-w-80  bg-normal text-textoClaro ${
        tipo === "otro"
          ? "h-40 gap-1"
          : "h-52 min-h-52 xl:h-[180px] gap-1 xl:gap-3"
      }`}
    >
      <span className="font-normal text-base">{titulo}</span>
      <div className=" font-semibold text-4xl xl:text-6xl  text">
        {numero || 0}
        <span className=" font-normal text-4xl">{medida}</span>
      </div>
      {tipo === "wind" && (
        <div id="windSpeed" className="flex gap-3 pt-3">
          <div
            className={` w-8 h-8 rounded-full flex justify-center items-center bg-opacity-30 bg-white`}
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <svg
              id="Capa_2"
              className=" w-3 h-3"
              data-name="Capa 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 94.5 79.52"
            >
              <g id="Layer_1" data-name="Layer 1">
                <path
                  className="fill-[#e7e7eb] stroke-[#e7e7eb] stroke-[.0056rem] w"
                  d="M2.99,78.68c-2.63-1.3-3.37-4.7-2.16-7.22,4.07-9.42,8.23-18.81,12.38-28.21.73-1.73,1.6-3.7.59-5.51C9.47,27.69,4.84,17.75.52,7.69-1.49,3.55,3.35-1.44,7.55.46c27.31,11.06,54.56,22.27,81.85,33.37,1.66.65,3.44,1.38,4.39,3.02,1.69,2.96.05,7.18-3.27,8.11-27.14,11.2-54.27,22.37-81.39,33.6-1.92.76-4.32,1.54-6.14.13Z"
                />
              </g>
            </svg>
          </div>
          <span>{direccionViento}</span>
        </div>
      )}

      {tipo === "humidity" && (
        <div
          id="windSpeed"
          className="flex text-textoMedio text-xs font-semibold  flex-col w-4/5 pt-1"
        >
          <div className=" w-full flex pb-1 justify-between">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>

          <div className=" w-full flex rounded-3xl bg-white h-2 justify-between ">
            <div
              style={{ width: `${numero}%` }}
              className={`rounded-3xl bg-primario h-2`}
            ></div>
            <span className="my-3">% </span>
          </div>
        </div>
      )}
    </div>
  );
};
