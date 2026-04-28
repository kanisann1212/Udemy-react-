import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterval,setFilterval] =useState("");
  return (
    <>
    <input type="text" value={filterval} onChange={(e)=>setFilterval(e.target.value)}/>
      <h3>配列のフィルター</h3>
      <ul>
        {animals
            // ↓↓↓メソッドチェーンが使われている↓↓↓  
          .filter(animal=>animal.indexOf(filterval) !==-1)
          .map((animal) => (      
          <li>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
