import { useState } from "react";

const Example = () => {
  const [set,setCount]= useState(0);
  const countUp =()=>{
    setCount(set+1);
  }
  const countDown =()=>{
    setCount(set-1);
  }
  return(
    <>
    <h1>現在のカウント：{set}</h1>
    <button onClick={countUp}>+</button>
    <button onClick={countDown}>-</button>
    </>
  )
};

export default Example;
