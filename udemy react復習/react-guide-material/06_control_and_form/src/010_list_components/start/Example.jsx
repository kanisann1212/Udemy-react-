
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  
  // const animalList =

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animals.map((animal)=> <li key={animal}>helloo,{animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
