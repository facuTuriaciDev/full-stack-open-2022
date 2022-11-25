import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findPerson, setFindPerson] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const filterArray = findPerson.length === 0 ? persons 
  : persons.filter(e=>e.name.includes(findPerson))

  const addNewName = (event) => {
    event.preventDefault();


    if(persons.map(person=>person.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    setPersons(persons.concat(nameObject));
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFindPerson = (event) => {
    console.log(event.target.value);
    setFindPerson(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter findPerson={findPerson} handleFindPerson={handleFindPerson}/>
      <h2>add a new</h2>
      <PersonForm newNumber={newNumber} newName={newName}
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
      addNewName={addNewName}/>
      <h2>Numbers</h2>
      <Persons filterArray={filterArray}/>
    </div>
  )
}

export default App