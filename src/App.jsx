import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"   
import SearchSection from "./components/SearchSection"
import { weatherCodes } from "./constants"
import NoResultsDiv from "./components/NoResultsDiv"
const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

 const [currentWeather, setCurrentWeather] = useState({})
 const [hasNoResults, setHasNoResults] = useState(false)

  // fetches weather details based on the API URl
  const getWeatherDetails = async (API_URL) => {
    setHasNoResults(false)
    try{
      const response = await fetch(API_URL)
      if(!response.ok) throw new Error()
      const data = await response.json()

      const temperature = data.current.temp_c
      const description = data.current.condition.text
      const weatherIcon = Object.keys(weatherCodes).find(icon=> weatherCodes[icon].includes(data.current.condition.code))

      setCurrentWeather({ temperature, description, weatherIcon})
    }catch(err){
      // set setHasNoResults state if there's an error
      setHasNoResults(true)
    }
  }

  // useEffect(()=> {
  //   const defaultCity = "Kannur"
  //   const API_URL = ` http://api.weatherapi.com/v1//forecast.json?key=${API_KEY}&q=${defaultCity}`;
  //   getWeatherDetails(API_URL);
  // }, [])

  return (
    <div className='container'>
      {/* Search section */}=
      <SearchSection getWeatherDetails = {getWeatherDetails}  />

      {hasNoResults ? (
        <NoResultsDiv />
      ) : (
        <div className="weather-section">
        <CurrentWeather currentWeather={currentWeather} />
      </div>
      )
    }


      
    </div>
  )
}

export default App