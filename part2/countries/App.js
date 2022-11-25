import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.js'
import Countries from './components/Countries.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [findCountry, setFindCountry] = useState('')
  
  const filterArray = findCountry.length === 0 ? countries 
  : countries.filter(e=>e.name.common.toLowerCase().includes(findCountry.toLowerCase()))
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all').then(response => {
        setCountries(response.data)
      })
  }, [])

  
  const handleFindCountry = (event) => {
    console.log(event.target.value)
    setFindCountry(event.target.value)
  }


  return (
    <div>
      <Filter customText={'find countries'} elementFiltered={findCountry} handle={handleFindCountry} />

      {
        findCountry.length === 0 
        ? <p>Enter a country name</p>
        : findCountry.length > 10 
        ? <p>Enter a country name</p>
        : <Countries filterArray={filterArray} setFindCountry={setFindCountry} />
      }
      
    </div>
  )
}

export default App