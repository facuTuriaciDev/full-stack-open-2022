import WeatherData from "./WeatherData"

const CountryData = ({ country }) => {

  return (
  <div>
      <div key={country.cca3}>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area} km<sup>2</sup></p>

        <h2>languages:</h2>
        <ul>
          {Object.values(country.languages).map(e => <li key={e}>{e}</li>)}
        </ul>
        <img src={country.flags.png} alt="flag" width="150" height="150"/>
      </div>

      <WeatherData country={country} />
  </div>
  )
}

export default CountryData