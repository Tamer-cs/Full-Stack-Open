import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')


  const handleName = (event) => {
    setNewName(event.target.value) 
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    setNewFilter(event.target.value)
  }
  

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const temp = { name: newName , number: newNumber, id: persons.length + 1 }
      setPersons(persons.concat(temp))
    }
  }

const persons_to_show = persons.filter(person =>
  person.name.toLowerCase().includes(filter.toLowerCase())
)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value = {filter} onChange = {handleSearch}/>
      </div>
      <h2>Add a New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} />
        </div>
        <div>
          phone number: <input onChange = {handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons_to_show.map( person => <div key = {person.id} >  {person.name} {person.number} </div> )}
      </div>

    </div>
  )
}

export default App


















// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')


//   const handleInput = (event) => {
//     setNewName(event.target.value)
//   }

//   const handleSubmit = (event) => {
//       event.preventDefault()
//       const personObject = {
//         name: newName
//       }
//     setPersons(persons.concat(personObject))
//     setNewName('')
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit = {handleSubmit}>
//         <div>
//           name: <input value = {newName} onChange = {handleInput}/>
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {persons.map(person => <div key={person.name}>{person.name}</div>)}
//     </div>
//   )
// }

// export default App