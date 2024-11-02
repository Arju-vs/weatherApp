// rafce
import React from 'react'

const SearchSection = ({getWeatherDetails}) => {

    const API_KEY = import.meta.env.VITE_API_KEY;

    // handles city search form submission
    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input")
        const API_URL = ` https://api.weatherapi.com/v1//forecast.json?key=${API_KEY}&q=${searchInput.value}`;
        console.log(searchInput.value);
        getWeatherDetails(API_URL); // Fetches weather details for the entered city
    }

  return (
    <div className="search-section">
        <form action="#" className="search-form" onSubmit={handleCitySearch}> 
        <span className="material-icons-round">search</span>
          <input type="text" placeholder='Enter a city!' className="search-input" required/>
        </form>
        
      </div>
  )
}

export default SearchSection
