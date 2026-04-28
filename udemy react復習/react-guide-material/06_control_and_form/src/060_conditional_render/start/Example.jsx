import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null,"Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalstr=animal ?? "";
            const isMatch = animalstr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          // {}を書く場合は処理を書くとき(この場合はreturnを最後に書かないと値が返ってこない)
          // ()を書くときはそのまま値を返す時
          .map((animal) => (
            <li key={animal}>{animal ?? "null,undefinedでした"}{animal === "Dog"&&"犬だよ"}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
