import { memo } from "react"
 const ChildMemo = memo(({stateB}) => {
  console.log('子供');
return(
  <h1>{stateB}</h1>
);
});


export default ChildMemo