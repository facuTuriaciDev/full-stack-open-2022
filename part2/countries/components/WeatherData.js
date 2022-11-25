import { useEffect, useState } from 'react'
import axios from 'axios'

const WeatherData = ({ country }) => {

  const api_key = process.env.REACT_APP_API_KEY

  const [weatherData, setWeatherData] = useState([])
  const [weatherIcon, setWeatherIcon] = useState([])
  const [weatherTemp, setWeatherTemp] = useState([])
  const [weatherWindSpeed, setWeatherWindSpeed] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`
      )
      .then((response) => {
        setWeatherData(response.data);
        setWeatherIcon(response.data.weather[0].icon);
        setWeatherTemp(response.data.main.temp);
        setWeatherWindSpeed(response.data.wind.speed);
      });
  }, []);

  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <p>temperature: {weatherTemp} Celsius</p>
      
      {
        weatherIcon.length === 0
        ? <p>loading...</p>
        : <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather icon" />
      }

      <p>wind {weatherWindSpeed} m/s</p>
    </div>
  )
}

export default WeatherData