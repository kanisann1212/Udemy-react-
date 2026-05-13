import { memo } from "react"

function areEqual(prev,next){
  if (prev.stateB !==next.stateB){
    return false
  }else {
    return true
  }
}
// 第二引数に関数を渡せる。if文などを使って更新前と後の数値を比較してtrueなら再レンダリングなし、falseなら再レンダリングありの挙動をとる
// memoはコンポーネントのみメモ化

 const ChildMemo = memo(({stateB}) => {
  console.log('子供');
return(
  <h1>{stateB}</h1>
);
},areEqual);
  

export default ChildMemo