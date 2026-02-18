const Persons = (props) => {
    return(
        props.persons_to_show.map( person => <div key = {person.id} >  {person.name} {person.number} </div> )
    )
}   

export default Persons