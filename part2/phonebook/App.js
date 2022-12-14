import { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import Notification from './components/Notification.js'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findPerson, setFindPerson] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
    }, [message])
  
  const filterArray = findPerson.length === 0 ? persons 
  : persons.filter(e=>e.name.includes(findPerson))


  const addNewName = (event) => {
    event.preventDefault();

    if(persons.map(person=>person.name).includes(newName)){
      updatePerson()
    } else {
      createPerson()
    }

  }

  const createPerson = () => {
    let maxId = Math.max(...persons.map(e => e.id))

    const nameObject = {
      name: newName,
      id: maxId + 1,
      number: newNumber
    }

    personsService
    .create(nameObject)
    .then(response => {      
      setPersons(persons.concat(response))
      manageMessage(`Added ${newName}`)
      setNewName('')
      setNewNumber('')
    })
    .catch(error => {
      manageMessage(`|ERROR| ${newName} has already been added to the server`)
    })
  }

  const manageMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null)
    }
    , 5000)
  }

  const updatePerson = () => {
    if(window.confirm(`${newName} is already added to phonebook, 
    replace the older number with a new one?`)){
        
      let personToUpdate = persons.find(e => e.name === newName)

      const nameObject = {
        name: personToUpdate.name,
        id: personToUpdate.id,
        number: newNumber
      }

      personsService
      .update(personToUpdate.id, nameObject)
      .then(response => {      
        setPersons(persons.map(e => e.id !== nameObject.id ? e : response))
        manageMessage(`Updated ${newName}`)
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        manageMessage(`|ERROR| Information of ${newName} has already been removed from server`)
      })

    }
  }

  const deletePerson = (id) => {
     const person = persons.find(e=>e.id === id)
      if(window.confirm(`Delete ${person.name}?`)){
        personsService
        .deleteUser(id)
        .then(response => {
          setPersons(persons.filter(e=>e.id !== id))
        })
        .catch(error => {
          manageMessage(`|ERROR| Information of ${person.name} has already been removed from server`)
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
    setFindPerson(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
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