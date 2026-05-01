import { useState } from "react";

// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits,setFruits] = useState([
    {label:"Apple",value:100,chcked:false},
    {label:"Banana",value:200,chcked:false},
    {label:"Cherry",value:300,chcked:false}
  ]);
const [num,setnum]=useState(0);
const handeleChange =(e)=>{
  const newFruits= fruits.map(fruit=>{
    const newFruit={...fruit}
    if(e.target.value===newFruit.label){
      newFruit.chcked=!fruit.chcked;
    }
    return newFruit;
  })
  setFruits(newFruits);
  let sumVal = 0;
  newFruits.forEach(fruit=>{
    if(fruit.chcked){
      sumVal +=fruit.value
    }
  })
  setnum(sumVal)
}

return(
  <div >
    {fruits.map(fruit=>{
      return(
        <div key={fruit.label}>
        <input type="checkbox" value={fruit.label}  onChange={handeleChange} id={fruit.label} checked={fruit.chcked}/>
        <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}円</label>
        </div>
      )
    })}
    <h1>合計料金:{num}</h1>
  </div>
)
};

export default Example;
