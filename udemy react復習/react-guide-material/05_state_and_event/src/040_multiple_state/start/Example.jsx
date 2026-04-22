import { useState } from "react";

const Example = () => {
  let [setA,setCountA] = useState(0);
  const handleClick =()=>{
    setCountA(setA+1)
  }
  console.log('再レンダリングされました')
  return(
    <>
    <h1>ボタンが{setA}回クリックされました。</h1>
    <button onClick={handleClick}>ボタンA</button>
    </>
  )
};

export default Example;
