import { useState } from "react";
import Animallist from "./animallist";

const Example = () => {
  const animals = ["Dog", "Cat", null,"Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filteranimal =animals.filter((animal) => {
        const animalstr = animal ?? "";
        const isMatch = animalstr.indexOf(filterVal) !== -1;
        return isMatch;
      })

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <Animallist animals={filteranimal}/>
    </>
  );
};

export default Example;
