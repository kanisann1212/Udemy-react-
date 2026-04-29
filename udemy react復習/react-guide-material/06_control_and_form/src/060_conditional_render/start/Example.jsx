import { useState } from "react";
import Animallist from "./animallist";
import Animalfilter from "./Animalfilter";

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
      <Animalfilter fillstate={[filterVal,setFilterVal]} />
      <Animallist animals={filteranimal}/>
    </>
  );
};

export default Example;
