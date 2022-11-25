import CountryData from './CountryData.js'

const Countries = ({filterArray, setFindCountry}) => {
  
  if(filterArray.length === 1){
    return (
      <CountryData country={filterArray[0]} />
    )
  }
  return(
    <div>
      {filterArray.map(country => 
        <p key={country.name.common}> 
          {country.name.common} <button onClick={() => setFindCountry(country.name.common)} >show</button>
        </p>)
      }
    </div>
  )
}

export default Countries