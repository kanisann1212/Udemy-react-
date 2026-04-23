import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person,setPerson] = useState(personObj)
  const setName =(e)=>{
    setPerson({...person,name:e.target.value})
  }
  const setAge= (e)=>{
    setPerson({...person,age:e.target.value})
  }
  return(
    <>
    <h1>NAME:{person.name}</h1>
    <h1>AGE:{person.age}</h1>
    <input type="text" value={person.name} onChange={setName}></input>
    <input type="number" value={person.age} onChange={setAge}></input>
    </>
  )
};

export default Example;
