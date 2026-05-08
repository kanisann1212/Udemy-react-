import { useReducer } from "react";
import { useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  // ※更新関数を第一引数に、第二引数に初期値
  const [rstate, dispatch] = useReducer((prev, {type,step}) => {
    // switch(action){
    //   case '+':
    //     return ++prev
    //   case '-':
    //     return --prev
    //   defalut :
    //   throw new Error('不明な値です。')  
    // }　
    // ↑こうやっても書ける
    if (action === '+') {
      return prev + step;
    } else if (action === '-') {
      return prev - step;
    }
  }, 0)
 // ↑dispatchからstepとして引数も受け取れる
  
  const Rplus = () => {
    dispatch({type:'+',step:2});
  }
  const Rminus = () => {
    dispatch({type:'-',step:3});
  }
  const plusState = () => {
    setState(prev => ++prev)
  }

  return (
    <>
      <h1>Usestateの場合：{state}</h1>
      <button onClick={plusState}>+</button>
      <h1>UseReducerの場合：{rstate}</h1>
      <button onClick={Rplus}>+</button>
      <button onClick={Rminus}>-</button>
    </>
  );
};

export default Example;
