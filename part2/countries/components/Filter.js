const Filter = ({customText, elementFiltered, handle}) => {
  return (
    <div>
      {customText} <input value={elementFiltered} onChange={handle}/>
    </div> 
  )
}

export default Filter