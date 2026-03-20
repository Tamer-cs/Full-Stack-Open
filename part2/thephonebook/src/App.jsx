import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personsService'
import Notification from './components/Notification'
import './index.css'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')

  const hook = () => {
    personService.getAll().then(data => {
      setPersons(data)
    })
  }
  useEffect(hook, [])

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setNewFilter(event.target.value)
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const repeatedPerson = persons.find(p => p.name === newName)
    if (repeatedPerson) {
      const updatedPerson = { ...repeatedPerson, number: newNumber }

      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        ? personService.updatePerson(repeatedPerson.id, updatedPerson).then(data => {
          setPersons(persons.map(p => p.id !== repeatedPerson.id ? p : data))
        },
        setNotificationMessage(`Updated ${newName}'s number`),
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
        )
        : console.log('Update cancelled')

    } else {
      const temp = { name: newName, number: newNumber, id: persons.length + 1 }
      personService.create(temp).then(data => {
        setPersons(persons.concat(data))
      })
      setNotificationMessage(`Added ${newName}`)
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    }
  }

  const persons_to_show = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter filter={filter} handleSearch={handleSearch} />
      <h2>Add a New</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Persons persons_to_show={persons_to_show} handleDelete={handleDelete} />
      
    </div>
  )
}

export default App