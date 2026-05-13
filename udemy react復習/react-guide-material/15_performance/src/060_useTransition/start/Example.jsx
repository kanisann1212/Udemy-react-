import { useState, useTransition } from "react";

const generateDummyItem = (num) => {
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};
//↑ arryで引数分の要素が入った配列作る→fillでnullでうめる→mapでそのnullにitem{index}といれる

const dummyItems = generateDummyItem(10000);
const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (e) => {
    startTransition(() => {
      setFilterVal(e.target.value);
    })
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {isPending && <h1>ロード中</h1>}
      <ul>
        {dummyItems
          .filter((item) => {
            if (filterVal === "") return true;
            return item.includes(filterVal);
          })
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
        {/* ↑ filterで最初に要素を全表示。入力値が変わったらstate更新してstateの入力値が含まれるものを表示 */}
      </ul>
    </>
  );
};

export default Example;
