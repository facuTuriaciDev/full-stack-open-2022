const Countries = ({filterArray}) => {
  
  if(filterArray.length === 1){
    return (
      <div>
        {filterArray.map(e => 
          <div key={e.cca3}>
            <h1>{e.name.common}</h1>
            <p>capital {e.capital}</p>
            <p>area {e.area} km<sup>2</sup></p>

            <h2>languages:</h2>
            <ul>
              {Object.values(e.languages).map(e => <li key={e}>{e}</li>)}
            </ul>
            <img src={e.flags.png} alt="flag" width="150" height="150"/>
          </div>
        )}
      </div>
    )
  }
  return(
    <div>
      {filterArray.map(countrie => 
        <p key={countrie.name.common}>
          {countrie.name.common} 
        </p>)}
    </div>
  )
}

export default Countries