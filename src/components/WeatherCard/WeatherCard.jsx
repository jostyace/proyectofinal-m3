export const WeatherCard = ({ fecha, minTemp, maxTemp, icon, meassure }) => {
  
  return (
    <div className="w-[45%] lg:py-6 sm:min-h-[250px] xl:max-w-[160px] lg:w-[16%] lg:max-w-[120px] py-3 lg:px-2 px-6 lg:min-h-[150px] xl:min-h-[220px] xl:min-w-[120px] xl:px-6 xl:w-[18%] min-h-[250px] text-center content-center flex-col bg-normal text-textoClaro">
      <span className="h-[15%] lg:text-[14px] text-[16px] ">{fecha}</span>
      <div className="w-[100%] flex flex-col justify-center items-center h-[70%] ">
      <img className="h-auto w-[80%] " src={`/weather/${icon}.svg`} />
      </div>
      
      <div className="h-[15%] text-[16px] lg:text-[14px] flex justify-between"><span >{minTemp && (meassure === 'C') ? parseInt(minTemp) : parseInt((minTemp * 1.8) + 32) || 0}°{meassure}</span> <span className="text-textoMedio">{maxTemp && (meassure === 'C') ? parseInt(maxTemp) : parseInt((maxTemp * 1.8) + 32) || 0}°{meassure}</span></div>
      
    </div>
  )
}
