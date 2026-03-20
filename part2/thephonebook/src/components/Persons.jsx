const Persons = (props) => {
    return(
        props.persons_to_show.map( person => 
        <div key = {person.id} >  {person.name} {person.number}
        <button onClick={() => props.handleDelete(person.id)}>delete</button>
        </div> )
    )
}   

export default Persons