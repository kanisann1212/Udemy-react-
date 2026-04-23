import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [num,setNum]=useState(numArray)
  const shuffle =()=>{
    const newnum =[...num]
    const value = newnum.pop()
    newnum.unshift(value);
    setNum(newnum);
  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
