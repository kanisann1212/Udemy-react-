import { useState } from "react";
import styled from "styled-components";

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background-color: pink;
  font-weight: bold;
  color: ${({props})=> props ? 'red':''}
`;

const SecondButton =styled(FirstButton)`
background-color: red;
color: ${({props})=> props ? 'white':''}
`

const Example = () => {
  const [isSelected,setSelected] = useState(false);
  const ChangeSelected =()=>setSelected((prev)=>!prev)
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードと同じ状態になるようにしてください。
        <ul>
          <li>Q1. 完了</li>
          <li>Q2.完了 </li>
          <li>
            Q3.
            SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。
          </li>
        </ul>
        <FirstButton props={isSelected} onClick={ChangeSelected}>ボタン1</FirstButton>
        <SecondButton props={isSelected} onClick={ChangeSelected}>ボタン2</SecondButton>
      </p>
    </>
  );
};

export default Example;
