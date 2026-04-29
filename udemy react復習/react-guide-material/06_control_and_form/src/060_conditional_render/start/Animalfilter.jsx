const Animalfilter = ({fillstate}) => {
  const [filterVal,setFilterVal] = fillstate;
  return (
    <input
      type="text"
      value={filterVal}
      onChange={(e) => setFilterVal(e.target.value)}
    />
  )
}

export default Animalfilter