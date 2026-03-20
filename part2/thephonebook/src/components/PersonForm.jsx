const PersonForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            name: <input value = {props.newName} onChange={props.handleName} />
            </div>
            <div>
            phone number: <input value = {props.newNumber} onChange = {props.handleNumber}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm