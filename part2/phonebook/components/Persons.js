const Persons = ({filterArray}) => {
  return(
    <div>
    {filterArray.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons