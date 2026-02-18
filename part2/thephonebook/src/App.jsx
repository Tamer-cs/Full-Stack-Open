import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      phone_number: '00 000 000'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value) 
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const temp = { name: newName , phone_number: newNumber }
      setPersons(persons.concat(temp))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map( person => <div key = {person.name} >  {person.name} {person.phone_number} </div> )}
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