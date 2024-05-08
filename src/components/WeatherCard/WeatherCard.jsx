export const WeatherCard = () => {
  return (
    <div className="min-w-[120px] w-[120px] p-3 max-h-[177px] text-center content-center flex-col bg-normal text-textoClaro">
        <span className="h-[20%]">Tomorrow</span>
        <img className="w-[100%] h-[60%] "  src="/weather/Shower.svg"/>
        <div className="h-[20%] flex justify-between"><span >16°C</span> <span className="text-textoMedio">16°C</span></div>

    </div>
  )
}
