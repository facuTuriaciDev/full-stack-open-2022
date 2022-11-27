import { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findPerson, setFindPerson] = useState('')

  useEffect(() => {
    console.log('effect')

    personsService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
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

    personsService
    .create(nameObject)
    .then(response => {      
      setPersons(persons.concat(response));
      setNewName('');
      setNewNumber('');
    })

  }

  const deletePerson = (id) => {
     const person = persons.find(e=>e.id === id)
      if(window.confirm(`Delete ${person.name}?`)){
        personsService
        .deleteUser(id)
        .then(response => {
          setPersons(persons.filter(e=>e.id !== id))
        })
      }
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
      <Persons filterArray={filterArray} deletePerson={deletePerson}/>
    </div>
  )
}

export default App