import { WeatherCard } from "../WeatherCard/WeatherCard"

export const DataContainer = () => {
  return (
    <div className="w-full h-screen bg-oscuro">
        <div className=" flex flex-wrap gap-4">
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
        </div>
    </div>
  )
}
