import { useState } from "react";
import { Child } from "./child";

const Example = () => {
  console.log ('親')
const [stateA,setstateA] = useState(0)
const [stateB,setstateB] = useState(0)

const changeA = ()=>{
  setstateA (prev => prev + 1)
}
const changeB = ()=>{
  setstateB (prev => prev + 1)
}
  return (
    <>
    <h3>React.memoで子コンポーネントの再レンダリングを防止</h3>
    <button onClick={changeA}>ぼたんＡ</button>
    <h1>{stateA}</h1>
    <button onClick={changeB}>ぼたんＢ</button>
    <Child stateB = {stateB} />
    </>
  );
};

export default Example;
